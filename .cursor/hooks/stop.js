#!/usr/bin/env node
const { readStdin, runExistingHook, transformToClaude, hookEnabled } = require('./adapter');
readStdin().then(raw => {
  const input = JSON.parse(raw || '{}');
  const claudeInput = transformToClaude(input);

  if (hookEnabled('stop:check-console-log', ['standard', 'strict'])) {
    runExistingHook('check-console-log.js', claudeInput);
  }
  if (hookEnabled('stop:session-end', ['minimal', 'standard', 'strict'])) {
    runExistingHook('session-end.js', claudeInput);
  }
  if (hookEnabled('stop:evaluate-session', ['minimal', 'standard', 'strict'])) {
    runExistingHook('evaluate-session.js', claudeInput);
  }
  if (hookEnabled('stop:cost-tracker', ['minimal', 'standard', 'strict'])) {
    runExistingHook('cost-tracker.js', claudeInput);
  }

  process.stdout.write(raw);
}).catch(() => process.exit(0));
