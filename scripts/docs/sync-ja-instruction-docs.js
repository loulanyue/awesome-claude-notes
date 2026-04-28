#!/usr/bin/env node

const { syncLocalizedInstructionDocs } = require('./sync-localized-instruction-docs');

const updatedCount = syncLocalizedInstructionDocs({ localeIds: ['ja-JP'] });
console.log(`Synchronized ${updatedCount} localized instruction docs`);
