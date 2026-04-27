#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '../..');
const JA_ROOT = path.join(ROOT_DIR, 'docs/ja-JP');

const CONTEXT_DESCRIPTIONS = {
  'dev.md': 'アクティブな実装作業に集中するための共有コンテキストです。',
  'research.md': '調査、探索、比較検討に集中するための共有コンテキストです。',
  'review.md': 'レビュー、検証、リスク抽出に集中するための共有コンテキストです。'
};

const TARGETS = [
  {
    type: 'commands',
    dir: path.join(JA_ROOT, 'commands')
  },
  {
    type: 'agents',
    dir: path.join(JA_ROOT, 'agents')
  },
  {
    type: 'contexts',
    dir: path.join(JA_ROOT, 'contexts')
  }
];

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

function buildNavigationSection(type, file) {
  const sourceLink = {
    commands: `../../../commands/${file}`,
    agents: `../../../agents/${file}`,
    contexts: `../../../contexts/${file}`
  }[type];

  return [
    '## 原文',
    `- [英語版の原文](${sourceLink})`,
    '',
    '## ナビゲーション',
    '- [日本語ドキュメント一覧](../README.md)',
    '- [コマンド一覧](../commands/README.md)',
    '- [エージェント一覧](../agents/README.md)',
    '- [コンテキスト一覧](../contexts/README.md)',
    '- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)',
    '- [貢献ガイド](../../../CONTRIBUTING.md)'
  ].join('\n');
}

function upsertLocalizedDoc(type, dir, file) {
  const fullPath = path.join(dir, file);
  const original = fs.readFileSync(fullPath, 'utf-8').replace(/\r\n/g, '\n');
  const parsed = extractFrontmatter(original);
  const canonicalFrontmatter = readCanonicalFrontmatter(type, file);

  let frontmatter = {};
  let body = original;

  if (parsed) {
    frontmatter = { ...parsed.data };
    body = parsed.body;
  }

  if (type === 'contexts' && !frontmatter.description) {
    frontmatter.description = CONTEXT_DESCRIPTIONS[file] || '共有コンテキストの日本語版ドキュメントです。';
  }

  if (!frontmatter.description && canonicalFrontmatter.description) {
    frontmatter.description = canonicalFrontmatter.description;
  }

  frontmatter.source_path = `${type}/${file}`;

  body = body
    .replace(/\n## 原文[\s\S]*$/u, '')
    .replace(/\n## ナビゲーション[\s\S]*$/u, '')
    .trimEnd();

  const nextContent = `${serializeFrontmatter(frontmatter)}${body}\n\n${buildNavigationSection(type, file)}\n`;
  fs.writeFileSync(fullPath, nextContent);
}

let updatedCount = 0;

for (const target of TARGETS) {
  const files = fs.readdirSync(target.dir)
    .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
    .sort();

  for (const file of files) {
    upsertLocalizedDoc(target.type, target.dir, file);
    updatedCount += 1;
  }
}

console.log(`Synchronized ${updatedCount} localized instruction docs`);
