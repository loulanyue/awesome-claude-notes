const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.join(__dirname, '..', '..');
const validator = path.join(repoRoot, 'scripts', 'ci', 'validate-package-files.js');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
    console.log(`  \u2713 ${name}`);
  } catch (error) {
    failed += 1;
    console.log(`  \u2717 ${name}`);
    console.log(`    ${error.message}`);
  }
}

function createFixture(packageJson, paths = []) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'package-files-test-'));
  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(packageJson));
  for (const relativePath of paths) {
    const absolutePath = path.join(root, relativePath);
    if (relativePath.endsWith('/')) {
      fs.mkdirSync(absolutePath, { recursive: true });
    } else {
      fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      fs.writeFileSync(absolutePath, 'fixture');
    }
  }
  return root;
}

function runValidator(root) {
  return spawnSync('node', [validator], {
    cwd: repoRoot,
    encoding: 'utf8',
    env: { ...process.env, ECC_PACKAGE_ROOT: root },
  });
}

console.log('\n=== Testing npm package file validation ===\n');

test('passes against the real repository package manifest', () => {
  const result = runValidator(repoRoot);
  assert.strictEqual(result.status, 0, result.stderr);
  assert.match(result.stdout, /Validated \d+ npm publish paths/);
});

test('accepts existing files, directories, and executable paths', () => {
  const root = createFixture(
    { files: ['docs/', 'README.md'], bin: { demo: 'bin/demo.js' } },
    ['docs/', 'README.md', 'bin/demo.js']
  );
  try {
    assert.strictEqual(runValidator(root).status, 0);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('accepts npm string-form executable paths', () => {
  const root = createFixture(
    { name: 'demo', files: ['README.md'], bin: 'bin/demo.js' },
    ['README.md', 'bin/demo.js']
  );
  try {
    assert.strictEqual(runValidator(root).status, 0);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('fails when a declared publish path is missing', () => {
  const root = createFixture({ files: ['missing.txt'] });
  try {
    const result = runValidator(root);
    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /references missing path: missing\.txt/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('fails when an executable path is missing', () => {
  const root = createFixture({ files: ['README.md'], bin: { demo: 'bin/demo.js' } }, [
    'README.md',
  ]);
  try {
    const result = runValidator(root);
    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /package\.json#bin\.demo references missing path/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('rejects paths outside the repository', () => {
  const root = createFixture({ files: ['../secret.txt'] });
  try {
    const result = runValidator(root);
    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /must stay inside the repository/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('requires a non-empty files array', () => {
  const root = createFixture({ files: [] });
  try {
    const result = runValidator(root);
    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /must be a non-empty array/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('rejects non-string publish paths', () => {
  const root = createFixture({ files: [42] });
  try {
    const result = runValidator(root);
    assert.strictEqual(result.status, 1);
    assert.match(result.stderr, /must be a string path/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

console.log(`\nPassed: ${passed}`);
console.log(`Failed: ${failed}`);
process.exit(failed > 0 ? 1 : 0);
