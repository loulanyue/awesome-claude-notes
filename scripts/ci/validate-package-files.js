#!/usr/bin/env node
/** Validate that npm publish and executable paths exist inside the repository. */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(
  process.env.ECC_PACKAGE_ROOT || path.join(__dirname, '../..')
);
const PACKAGE_PATH = path.join(REPO_ROOT, 'package.json');

function readPackage() {
  try {
    return JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8'));
  } catch (error) {
    throw new Error(`Cannot read package.json: ${error.message}`);
  }
}

function normalizeEntry(entry) {
  return String(entry).replace(/\\/g, '/').replace(/\/+$/, '');
}

function validateRelativePath(entry, label) {
  if (typeof entry !== 'string') {
    return `${label} must be a string path`;
  }

  const normalized = normalizeEntry(entry);
  const absolutePath = path.resolve(REPO_ROOT, normalized);
  const relativePath = path.relative(REPO_ROOT, absolutePath);

  if (!normalized || path.isAbsolute(normalized) || relativePath.startsWith('..')) {
    return `${label} must stay inside the repository: ${entry}`;
  }
  if (!fs.existsSync(absolutePath)) {
    return `${label} references missing path: ${normalized}`;
  }
  return null;
}

function validatePackageFiles() {
  const packageJson = readPackage();
  const files = packageJson.files;
  const errors = [];
  let binEntries = [];

  if (typeof packageJson.bin === 'string') {
    binEntries = [[packageJson.name || 'package', packageJson.bin]];
  } else if (packageJson.bin === null || packageJson.bin === undefined) {
    binEntries = [];
  } else if (typeof packageJson.bin === 'object' && !Array.isArray(packageJson.bin)) {
    binEntries = Object.entries(packageJson.bin);
  } else {
    errors.push('package.json#bin must be a string path or command map');
  }

  if (!Array.isArray(files) || files.length === 0) {
    errors.push('package.json#files must be a non-empty array');
  } else {
    for (const entry of files) {
      const error = validateRelativePath(entry, 'package.json#files');
      if (error) errors.push(error);
    }
  }

  for (const [name, entry] of binEntries) {
    const error = validateRelativePath(entry, `package.json#bin.${name}`);
    if (error) errors.push(error);
  }

  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR: ${error}`);
    return false;
  }

  console.log(
    `Validated ${files.length} npm publish paths and ${binEntries.length} executables`
  );
  return true;
}

if (require.main === module) {
  try {
    process.exit(validatePackageFiles() ? 0 : 1);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { normalizeEntry, validatePackageFiles, validateRelativePath };
