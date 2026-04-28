#!/usr/bin/env node
/**
 * Validate core instruction docs share a consistent structure:
 * - commands/*.md: frontmatter with description + navigation section
 * - agents/*.md: frontmatter + navigation section
 * - contexts/*.md: frontmatter with description + navigation section
 */

const fs = require('fs');
const path = require('path');
const { LOCALIZED_DOC_LOCALES } = require('../docs/localized-instruction-docs-config');

const ROOT_DIR = path.join(__dirname, '../..');
const TARGETS = [
  {
    dir: path.join(ROOT_DIR, 'commands'),
    label: 'command',
    requireDescription: true
  },
  {
    dir: path.join(ROOT_DIR, 'agents'),
    label: 'agent',
    requireDescription: false
  },
  {
    dir: path.join(ROOT_DIR, 'contexts'),
    label: 'context',
    requireDescription: true
  }
];
const LOCALIZED_TARGETS = LOCALIZED_DOC_LOCALES.flatMap((locale) => {
  const headingSections = [`## ${locale.sourceHeading}`, `## ${locale.navigationHeading}`];
  return [
    {
      dir: path.join(ROOT_DIR, `docs/${locale.id}/commands`),
      label: `localized command (${locale.id})`,
      requireDescription: true,
      requireSourcePath: true,
      expectedSourcePrefix: 'commands/',
      requiredSections: headingSections
    },
    {
      dir: path.join(ROOT_DIR, `docs/${locale.id}/agents`),
      label: `localized agent (${locale.id})`,
      requireDescription: true,
      requireSourcePath: true,
      expectedSourcePrefix: 'agents/',
      requiredFrontmatterFields: ['name', 'tools', 'model'],
      requiredSections: headingSections
    },
    {
      dir: path.join(ROOT_DIR, `docs/${locale.id}/contexts`),
      label: `localized context (${locale.id})`,
      requireDescription: true,
      requireSourcePath: true,
      expectedSourcePrefix: 'contexts/',
      requiredSections: headingSections
    }
  ];
});

function extractFrontmatter(content) {
  const cleanContent = content.replace(/^\uFEFF/, '');
  const match = cleanContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const frontmatter = {};
  const lines = match[1].split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx <= 0) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    frontmatter[key] = value;
  }
  return frontmatter;
}

function validateInstructionDocs() {
  let hasErrors = false;
  let validatedCount = 0;

  for (const target of TARGETS) {
    if (!fs.existsSync(target.dir)) continue;

    const files = fs.readdirSync(target.dir).filter(file => file.endsWith('.md')).sort();
    for (const file of files) {
      const filePath = path.join(target.dir, file);
      let content;
      try {
        content = fs.readFileSync(filePath, 'utf-8');
      } catch (err) {
        console.error(`ERROR: ${target.label} ${file} - ${err.message}`);
        hasErrors = true;
        continue;
      }

      validatedCount += 1;
      const frontmatter = extractFrontmatter(content);
      if (!frontmatter) {
        console.error(`ERROR: ${target.label} ${file} - Missing frontmatter`);
        hasErrors = true;
        continue;
      }

      if (target.requireDescription) {
        const description = frontmatter.description;
        if (!description || !String(description).trim()) {
          console.error(`ERROR: ${target.label} ${file} - Missing frontmatter description`);
          hasErrors = true;
        }
      }

      if (!/\n## Navigation\r?\n/.test(content)) {
        console.error(`ERROR: ${target.label} ${file} - Missing "## Navigation" section`);
        hasErrors = true;
      }
    }
  }

  for (const target of LOCALIZED_TARGETS) {
    if (!fs.existsSync(target.dir)) continue;

    const files = fs.readdirSync(target.dir)
      .filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md')
      .sort();

    for (const file of files) {
      const filePath = path.join(target.dir, file);
      let content;
      try {
        content = fs.readFileSync(filePath, 'utf-8');
      } catch (err) {
        console.error(`ERROR: ${target.label} ${file} - ${err.message}`);
        hasErrors = true;
        continue;
      }

      validatedCount += 1;
      const frontmatter = extractFrontmatter(content);
      if (!frontmatter) {
        console.error(`ERROR: ${target.label} ${file} - Missing frontmatter`);
        hasErrors = true;
        continue;
      }

      if (target.requireDescription) {
        const description = frontmatter.description;
        if (!description || !String(description).trim()) {
          console.error(`ERROR: ${target.label} ${file} - Missing frontmatter description`);
          hasErrors = true;
        }
      }

      if (target.requireSourcePath) {
        const sourcePath = frontmatter.source_path;
        if (!sourcePath || !String(sourcePath).trim()) {
          console.error(`ERROR: ${target.label} ${file} - Missing frontmatter source_path`);
          hasErrors = true;
        } else {
          const normalizedSourcePath = String(sourcePath).trim();
          if (!normalizedSourcePath.startsWith(target.expectedSourcePrefix)) {
            console.error(
              `ERROR: ${target.label} ${file} - source_path must start with "${target.expectedSourcePrefix}"`
            );
            hasErrors = true;
          } else if (!fs.existsSync(path.join(ROOT_DIR, normalizedSourcePath))) {
            console.error(`ERROR: ${target.label} ${file} - source_path does not exist: ${normalizedSourcePath}`);
            hasErrors = true;
          }
        }
      }

      for (const field of target.requiredFrontmatterFields || []) {
        const value = frontmatter[field];
        if (!value || !String(value).trim()) {
          console.error(`ERROR: ${target.label} ${file} - Missing frontmatter ${field}`);
          hasErrors = true;
        }
      }

      for (const section of target.requiredSections || []) {
        if (!content.includes(`\n${section}\n`)) {
          console.error(`ERROR: ${target.label} ${file} - Missing "${section}" section`);
          hasErrors = true;
        }
      }
    }
  }

  if (hasErrors) {
    process.exit(1);
  }

  console.log(`Validated ${validatedCount} instruction docs`);
}

validateInstructionDocs();
