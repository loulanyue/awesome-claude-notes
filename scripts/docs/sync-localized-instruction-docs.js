#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {
  CANONICAL_PATH_CANDIDATES,
  LOCALIZED_DOC_LOCALES
} = require('./localized-instruction-docs-config');

const ROOT_DIR = path.join(__dirname, '../..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const ROOT_GUIDE_START = '<!-- localized-instruction-docs:start -->';
const ROOT_GUIDE_END = '<!-- localized-instruction-docs:end -->';
const TYPE_ORDER = ['commands', 'agents', 'contexts'];
const GENERATED_INDEX_RELATIVE_PATHS = new Set([
  'agents/README.md',
  'commands/README.md',
  'contexts/README.md'
]);

function extractFrontmatter(content) {
  const cleanContent = content.replace(/^\uFEFF/, '');
  const match = cleanContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;

  const data = {};
  const lines = match[1].split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx <= 0) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    data[key] = value;
  }

  return {
    data,
    body: cleanContent.slice(match[0].length)
  };
}

function readCanonicalFrontmatter(type, file) {
  const canonicalPath = path.join(ROOT_DIR, type, file);
  if (!fs.existsSync(canonicalPath)) return {};

  const parsed = extractFrontmatter(fs.readFileSync(canonicalPath, 'utf-8'));
  return parsed ? parsed.data : {};
}

function serializeFrontmatter(data) {
  const order = ['name', 'description', 'tools', 'model', 'source_path'];
  const lines = ['---'];
  const seen = new Set();

  for (const key of order) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      lines.push(`${key}: ${data[key]}`);
      seen.add(key);
    }
  }

  for (const [key, value] of Object.entries(data)) {
    if (seen.has(key)) continue;
    lines.push(`${key}: ${value}`);
  }

  lines.push('---', '');
  return `${lines.join('\n')}`;
}

function extractTitle(body, fallbackFile) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallbackFile.replace(/\.md$/, '');
}

function relativePathFromLocaleRoot(locale, filePath) {
  return path.relative(path.join(DOCS_DIR, locale.id), filePath).replace(/\\/g, '/');
}

function relativeDocLinks(locale, currentType) {
  const links = [
    { label: locale.rootReadmeLabel, href: '../README.md' }
  ];

  for (const type of TYPE_ORDER) {
    const dir = path.join(DOCS_DIR, locale.id, type);
    if (!fs.existsSync(dir)) continue;

    const label = {
      commands: locale.commandsIndexLabel,
      agents: locale.agentsIndexLabel,
      contexts: locale.contextsIndexLabel
    }[type];

    links.push({ label, href: `../${type}/README.md` });
  }

  links.push({ label: 'Command → Agent / Skill Map', href: '../../COMMAND-AGENT-MAP.md' });
  links.push({ label: locale.contributingGuideLabel, href: '../../../CONTRIBUTING.md' });
  return links;
}

function buildNavigationSection(locale, type, file) {
  const sourceLink = {
    commands: `../../../commands/${file}`,
    agents: `../../../agents/${file}`,
    contexts: `../../../contexts/${file}`
  }[type];

  const lines = [
    `## ${locale.sourceHeading}`,
    `- [${locale.sourceLinkLabel}](${sourceLink})`,
    '',
    `## ${locale.navigationHeading}`
  ];

  for (const link of relativeDocLinks(locale, type)) {
    lines.push(`- [${link.label}](${link.href})`);
  }

  return lines.join('\n');
}

function localizedTypeDir(locale, type) {
  return path.join(DOCS_DIR, locale.id, type);
}

function resolveCanonicalSourcePath(relativePath) {
  for (const buildCandidate of CANONICAL_PATH_CANDIDATES) {
    const candidate = buildCandidate(relativePath);
    if (!candidate) continue;
    if (fs.existsSync(path.join(ROOT_DIR, candidate))) {
      return candidate;
    }
  }
  return null;
}

function listLocaleMarkdownFiles(locale) {
  const localeRoot = path.join(DOCS_DIR, locale.id);
  const results = [];

  function walk(currentDir) {
    if (!fs.existsSync(currentDir)) return;
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.md')) {
        results.push(relativePathFromLocaleRoot(locale, fullPath));
      }
    }
  }

  walk(localeRoot);
  return results.sort();
}

function getManagedLocalizedDocPaths(locale) {
  return listLocaleMarkdownFiles(locale).filter((relativePath) => {
    if (relativePath === 'README.md') return false;
    if (GENERATED_INDEX_RELATIVE_PATHS.has(relativePath)) return false;
    return Boolean(resolveCanonicalSourcePath(relativePath));
  });
}

function buildRelativeLink(fromRelativePath, targetRelativePath) {
  const fromDir = path.posix.dirname(fromRelativePath);
  return path.posix.relative(fromDir, targetRelativePath) || '.';
}

function buildLocaleRelativeLink(locale, fromRelativePath, targetRelativePath) {
  const fromPath = path.posix.join('docs', locale.id, fromRelativePath);
  const targetPath = path.posix.join('docs', locale.id, targetRelativePath);
  return path.posix.relative(path.posix.dirname(fromPath), targetPath) || '.';
}

function buildRepoRelativeLink(locale, fromRelativePath, targetRepoPath) {
  const fromPath = path.posix.join('docs', locale.id, fromRelativePath);
  return path.posix.relative(path.posix.dirname(fromPath), targetRepoPath) || '.';
}

function cleanupTailSections(body, locale) {
  const headings = [
    locale.sourceHeading,
    locale.navigationHeading,
    '原文',
    '导航',
    '導航',
    'ナビゲーション',
    '원문',
    '탐색',
    'Fonte canônica',
    'Navegação',
    'Kaynak belge',
    'Gezinme'
  ];

  let nextBody = body;
  for (const heading of headings) {
    const pattern = new RegExp(`\\n## ${heading}[\\s\\S]*$`, 'u');
    nextBody = nextBody.replace(pattern, '');
  }
  return nextBody.trimEnd();
}

function buildManagedDocNavigationLinks(locale, relativePath) {
  const links = [
    {
      label: locale.rootReadmeLabel,
      href: buildLocaleRelativeLink(locale, relativePath, 'README.md')
    }
  ];

  const topLevelDir = relativePath.split('/')[0];
  const categoryReadme = `${topLevelDir}/README.md`;
  if (
    categoryReadme !== relativePath &&
    !GENERATED_INDEX_RELATIVE_PATHS.has(categoryReadme) &&
    fs.existsSync(path.join(DOCS_DIR, locale.id, categoryReadme))
  ) {
    links.push({
      label: `${topLevelDir}/README.md`,
      href: buildLocaleRelativeLink(locale, relativePath, categoryReadme)
    });
  }

  if (TYPE_ORDER.includes(topLevelDir)) {
    links.push({
      label: 'Command → Agent / Skill Map',
      href: buildRepoRelativeLink(locale, relativePath, 'docs/COMMAND-AGENT-MAP.md')
    });
  }

  links.push({
    label: locale.contributingGuideLabel,
    href: buildRepoRelativeLink(locale, relativePath, 'CONTRIBUTING.md')
  });

  return links;
}

function buildManagedDocNavigationSection(locale, relativePath, sourcePath) {
  const lines = [
    `## ${locale.sourceHeading}`,
    `- [${locale.sourceLinkLabel}](${buildRepoRelativeLink(locale, relativePath, sourcePath)})`,
    '',
    `## ${locale.navigationHeading}`
  ];

  for (const link of buildManagedDocNavigationLinks(locale, relativePath)) {
    lines.push(`- [${link.label}](${link.href})`);
  }

  return lines.join('\n');
}

function upsertLocalizedDoc(locale, type, file) {
  const relativePath = `${type}/${file}`;
  const sourcePath = resolveCanonicalSourcePath(relativePath);
  const fullPath = path.join(localizedTypeDir(locale, type), file);
  const original = fs.readFileSync(fullPath, 'utf-8').replace(/\r\n/g, '\n');
  const parsed = extractFrontmatter(original);
  const canonicalFrontmatter = sourcePath
    ? (extractFrontmatter(fs.readFileSync(path.join(ROOT_DIR, sourcePath), 'utf-8')) || { data: {} }).data
    : {};

  let frontmatter = {};
  let body = original;

  if (parsed) {
    frontmatter = { ...parsed.data };
    body = parsed.body;
  }

  if (type === 'contexts' && !frontmatter.description) {
    frontmatter.description = locale.contextDescriptions[file] || canonicalFrontmatter.description || 'Localized shared context document.';
  }

  if (!frontmatter.description && canonicalFrontmatter.description) {
    frontmatter.description = canonicalFrontmatter.description;
  }

  frontmatter.source_path = sourcePath || `${type}/${file}`;
  body = cleanupTailSections(body, locale);

  const nextContent = `${serializeFrontmatter(frontmatter)}${body}\n\n${buildNavigationSection(locale, type, file)}\n`;
  fs.writeFileSync(fullPath, nextContent);
}

function upsertManagedLocalizedMarkdown(locale, relativePath) {
  const fullPath = path.join(DOCS_DIR, locale.id, relativePath);
  const sourcePath = resolveCanonicalSourcePath(relativePath);
  if (!sourcePath) return false;

  const original = fs.readFileSync(fullPath, 'utf-8').replace(/\r\n/g, '\n');
  const parsed = extractFrontmatter(original);
  const canonicalParsed = extractFrontmatter(fs.readFileSync(path.join(ROOT_DIR, sourcePath), 'utf-8'));
  const canonicalFrontmatter = canonicalParsed ? canonicalParsed.data : {};

  let frontmatter = {};
  let body = original;

  if (parsed) {
    frontmatter = { ...parsed.data };
    body = parsed.body;
  }

  if (!frontmatter.description && canonicalFrontmatter.description) {
    frontmatter.description = canonicalFrontmatter.description;
  }

  const contextFile = relativePath.match(/^contexts\/(.+)$/);
  if (contextFile && !frontmatter.description) {
    frontmatter.description = locale.contextDescriptions[contextFile[1]] || 'Localized shared context document.';
  }

  frontmatter.source_path = sourcePath;
  body = cleanupTailSections(body, locale);

  const nextContent = `${serializeFrontmatter(frontmatter)}${body}\n\n${buildManagedDocNavigationSection(locale, relativePath, sourcePath)}\n`;
  fs.writeFileSync(fullPath, nextContent);
  return true;
}

function collectLocalizedEntries(locale, type) {
  const dir = localizedTypeDir(locale, type);
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
    .sort()
    .map((file) => {
      const fullPath = path.join(dir, file);
      const content = fs.readFileSync(fullPath, 'utf-8').replace(/\r\n/g, '\n');
      const parsed = extractFrontmatter(content);
      const body = parsed ? parsed.body : content;
      return {
        file,
        title: extractTitle(body, file)
      };
    });
}

function renderIndexPage(locale, type, entries) {
  const content = locale.indexContent[type];
  const lines = [
    `# ${content.title}`,
    '',
    content.intro,
    '',
    `## ${locale.fileListHeading}`
  ];

  for (const entry of entries) {
    lines.push(`- [${entry.title}](./${entry.file})`);
  }

  lines.push('', `## ${locale.navigationHeading}`);
  lines.push(`- [${locale.rootReadmeLabel}](../README.md)`);

  for (const siblingType of TYPE_ORDER) {
    const siblingDir = localizedTypeDir(locale, siblingType);
    if (!fs.existsSync(siblingDir)) continue;

    const label = {
      commands: locale.commandsIndexLabel,
      agents: locale.agentsIndexLabel,
      contexts: locale.contextsIndexLabel
    }[siblingType];
    lines.push(`- [${label}](../${siblingType}/README.md)`);
  }

  lines.push('- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)');
  lines.push(`- [${locale.contributingGuideLabel}](../../../CONTRIBUTING.md)`);
  lines.push('');

  return `${lines.join('\n')}`;
}

function upsertIndexPages(locale) {
  const counts = {};

  for (const type of TYPE_ORDER) {
    const dir = localizedTypeDir(locale, type);
    if (!fs.existsSync(dir)) continue;

    const entries = collectLocalizedEntries(locale, type);
    counts[type] = entries.length;
    const readmePath = path.join(dir, 'README.md');
    fs.writeFileSync(readmePath, `${renderIndexPage(locale, type, entries)}\n`);
  }

  return counts;
}

function buildRootGuideSection(locale, counts) {
  const links = [];

  if (counts.commands) {
    links.push(`- [${locale.commandsIndexLabel}](./commands/README.md) (${counts.commands})`);
  }
  if (counts.agents) {
    links.push(`- [${locale.agentsIndexLabel}](./agents/README.md) (${counts.agents})`);
  }
  if (counts.contexts) {
    links.push(`- [${locale.contextsIndexLabel}](./contexts/README.md) (${counts.contexts})`);
  }

  links.push('- [Command → Agent / Skill Map](../COMMAND-AGENT-MAP.md)');
  links.push(`- [${locale.contributingGuideLabel}](../../CONTRIBUTING.md)`);

  return [
    ROOT_GUIDE_START,
    `## ${locale.rootGuideHeading}`,
    '',
    locale.rootGuideIntro,
    '',
    ...links,
    ROOT_GUIDE_END
  ].join('\n');
}

function upsertRootGuide(locale, counts) {
  const readmePath = path.join(DOCS_DIR, locale.id, 'README.md');
  if (!fs.existsSync(readmePath)) return;

  const original = fs.readFileSync(readmePath, 'utf-8').replace(/\r\n/g, '\n');
  const section = buildRootGuideSection(locale, counts);
  const pattern = new RegExp(`${ROOT_GUIDE_START}[\\s\\S]*?${ROOT_GUIDE_END}`, 'u');
  const nextContent = pattern.test(original)
    ? original.replace(pattern, section)
    : `${original.trimEnd()}\n\n${section}\n`;

  fs.writeFileSync(readmePath, nextContent);
}

function syncLocale(locale) {
  let updatedCount = 0;

  for (const relativePath of getManagedLocalizedDocPaths(locale)) {
    if (upsertManagedLocalizedMarkdown(locale, relativePath)) {
      updatedCount += 1;
    }
  }

  for (const type of TYPE_ORDER) {
    const dir = localizedTypeDir(locale, type);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir)
      .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
      .sort();

    for (const file of files) {
      upsertLocalizedDoc(locale, type, file);
      updatedCount += 1;
    }
  }

  const counts = upsertIndexPages(locale);
  upsertRootGuide(locale, counts);
  return updatedCount;
}

function parseLocaleArgs(argv) {
  const ids = [];
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--locale' && argv[i + 1]) {
      ids.push(argv[i + 1]);
      i += 1;
    }
  }
  return ids;
}

function syncLocalizedInstructionDocs(options = {}) {
  const selectedIds = options.localeIds && options.localeIds.length > 0
    ? new Set(options.localeIds)
    : null;

  let updatedCount = 0;
  for (const locale of LOCALIZED_DOC_LOCALES) {
    if (selectedIds && !selectedIds.has(locale.id)) continue;
    updatedCount += syncLocale(locale);
  }

  return updatedCount;
}

if (require.main === module) {
  const localeIds = parseLocaleArgs(process.argv.slice(2));
  const updatedCount = syncLocalizedInstructionDocs({ localeIds });
  console.log(`Synchronized ${updatedCount} localized instruction docs`);
}

module.exports = {
  getManagedLocalizedDocPaths,
  resolveCanonicalSourcePath,
  syncLocalizedInstructionDocs
};
