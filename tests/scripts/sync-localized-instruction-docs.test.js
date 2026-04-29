/**
 * Tests for scripts/docs/sync-localized-instruction-docs.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const {
  collectSeedableLocalizedDocPaths,
  syncLocalizedInstructionDocs
} = require('../../scripts/docs/sync-localized-instruction-docs');

const repoRoot = path.resolve(__dirname, '../..');

function test(name, fn) {
  try {
    fn();
    console.log(`  \u2713 ${name}`);
    return true;
  } catch (err) {
    console.log(`  \u2717 ${name}`);
    console.log(`    Error: ${err.message}`);
    return false;
  }
}

function withRestoredFile(filePath, fn) {
  const hadOriginal = fs.existsSync(filePath);
  const original = hadOriginal ? fs.readFileSync(filePath, 'utf-8') : null;

  if (hadOriginal) {
    fs.unlinkSync(filePath);
  }

  try {
    fn();
  } finally {
    if (hadOriginal) {
      fs.writeFileSync(filePath, original);
    } else if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}

function withRestoredBinaryFile(filePath, fn) {
  const hadOriginal = fs.existsSync(filePath);
  const original = hadOriginal ? fs.readFileSync(filePath) : null;

  if (hadOriginal) {
    fs.unlinkSync(filePath);
  }

  try {
    fn();
  } finally {
    if (hadOriginal) {
      fs.writeFileSync(filePath, original);
    } else if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}

function runTests() {
  console.log('\n=== Testing sync-localized-instruction-docs.js ===\n');

  let passed = 0;
  let failed = 0;

  console.log('Candidate discovery:');

  if (test('collects canonical instruction docs and localized managed docs', () => {
    const candidates = new Set(collectSeedableLocalizedDocPaths());
    assert.ok(candidates.has('agents/chief-of-staff.md'));
    assert.ok(candidates.has('contexts/dev.md'));
    assert.ok(candidates.has('AGENTS.md'));
    assert.ok(candidates.has('examples/statusline.json'));
    assert.ok(candidates.has('rules/common/testing.md'));
    assert.ok(candidates.has('the-shortform-guide.md'));
  })) passed++; else failed++;

  console.log('\nSeed missing markdown files:');

  if (test('re-seeds a localized markdown doc and restores metadata/navigation', () => {
    const relativePath = 'AGENTS.md';
    const localizedPath = path.join(repoRoot, 'docs/ja-JP', relativePath);

    withRestoredFile(localizedPath, () => {
      syncLocalizedInstructionDocs({
        localeIds: ['ja-JP'],
        seedMissing: true,
        candidateRelativePaths: [relativePath]
      });

      const content = fs.readFileSync(localizedPath, 'utf-8');
      assert.ok(content.includes('source_path: AGENTS.md'));
      assert.ok(content.includes('## 原文'));
      assert.ok(content.includes('## ナビゲーション'));
    });
  })) passed++; else failed++;

  console.log('\nSeed missing JSON files:');

  if (test('re-seeds a localized JSON asset from the canonical source', () => {
    const relativePath = 'examples/statusline.json';
    const localizedPath = path.join(repoRoot, 'docs/ja-JP', relativePath);
    const canonicalPath = path.join(repoRoot, 'examples/statusline.json');

    withRestoredBinaryFile(localizedPath, () => {
      syncLocalizedInstructionDocs({
        localeIds: ['ja-JP'],
        seedMissing: true,
        candidateRelativePaths: [relativePath]
      });

      const localized = fs.readFileSync(localizedPath, 'utf-8');
      const canonical = fs.readFileSync(canonicalPath, 'utf-8');
      assert.strictEqual(localized, canonical);
    });
  })) passed++; else failed++;

  console.log(`\nResults: Passed: ${passed}, Failed: ${failed}`);
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
