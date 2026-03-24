'use strict';

/**
 * Split a shell command into segments by operators (&&, ||, ;, &)
 * while respecting quoting (single/double) and escaped characters.
 * Redirection operators (&>, >&, 2>&1) are NOT treated as separators.
 */
function splitShellSegments(command) {
  const segments = [];
  let current = '';
  let quote = null;

  for (let i = 0; i < command.length; i++) {
    const ch = command[i];

    // Inside quotes: handle escapes and closing quote
    if (quote) {
      if (ch === '\\' && i + 1 < command.length) {
        current += ch + command[i + 1];
        i++;
        continue;
      }
      if (ch === quote) quote = null;
      current += ch;
      continue;
    }

    // Backslash escape outside quotes
    if (ch === '\\' && i + 1 < command.length) {
      current += ch + command[i + 1];
      i++;
      continue;
    }

    // Opening quote
    if (ch === '"' || ch === "'") {
      quote = ch;
      current += ch;
      continue;
    }

    const next = command[i + 1] || '';
    const prev = i > 0 ? command[i - 1] : '';

    // && operator
    if (ch === '&' && next === '&') {
      if (current.trim()) segments.push(current.trim());
      current = '';
      i++;
      continue;
    }

    // || operator
    if (ch === '|' && next === '|') {
      if (current.trim()) segments.push(current.trim());
      current = '';
      i++;
      continue;
    }

    // ; separator
    if (ch === ';') {
      if (current.trim()) segments.push(current.trim());
      current = '';
      continue;
    }

    // Single & — but skip redirection patterns (&>, >&, digit>&)
    if (ch === '&' && next !== '&') {
      if (next === '>' || prev === '>') {
        current += ch;
        continue;
      }
      if (current.trim()) segments.push(current.trim());
      current = '';
      continue;
    }

    current += ch;
  }

  if (current.trim()) segments.push(current.trim());
  return segments;
}

module.exports = { splitShellSegments };
