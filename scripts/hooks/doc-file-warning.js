#!/usr/bin/env node
/**
 * Doc file warning hook (PreToolUse - Write)
 * Warns about non-standard documentation files.
 * Exit code 0 always (warns only, never blocks).
 */

'use strict';

const path = require('path');

const MAX_STDIN = 1024 * 1024;
let data = '';

function isAllowedDocPath(filePath) {
  const normalized = filePath.replace(/\\/g, '/');
  const basename = path.basename(filePath);

  if (!/\.(md|txt)$/i.test(filePath)) return true;

  if (/^(README|CLAUDE|AGENTS|CONTRIBUTING|CHANGELOG|LICENSE|SKILL|MEMORY|WORKLOG)\.md$/i.test(basename)) {
    return true;
  }

  if (/\.claude\/(commands|plans|projects)\//.test(normalized)) {
    return true;
  }

  if (/(^|\/)(docs|skills|\.history|memory)\//.test(normalized)) {
    return true;
  }

  if (/\.plan\.md$/i.test(basename)) {
    return true;
  }

  return false;
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', c => {
  if (data.length < MAX_STDIN) {
    const remaining = MAX_STDIN - data.length;
    data += c.substring(0, remaining);
  }
});

process.stdin.on('end', () => {
  try {
    const input = JSON.parse(data);
    const filePath = String(input.tool_input?.file_path || '');

    if (filePath && !isAllowedDocPath(filePath)) {
      console.error('[Hook] WARNING: Non-standard documentation file detected');
      console.error(`[Hook] File: ${filePath}`);
      console.error('[Hook] Consider consolidating into README.md or docs/ directory');
    }
  } catch {
    // ignore parse errors
  }

  process.stdout.write(data);
});
