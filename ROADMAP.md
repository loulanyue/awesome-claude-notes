# Roadmap

This roadmap describes the priorities of the `loulanyue/awesome-claude-notes`
distribution. It is not a promise of fixed delivery dates. Work is tracked through
GitHub Issues and Milestones.

## Now: make the distribution predictable

- Keep `package.json`, `VERSION`, changelog, Git tags, and GitHub Releases aligned.
- Validate installation and the bundled agents, skills, commands, hooks, and manifests in CI.
- Document the relationship with the upstream [affaan-m/ECC](https://github.com/affaan-m/ECC)
  project and record the source range used for each sync.
- Triage existing Issues and Pull Requests into actionable milestones.

## Next: improve cross-harness reliability

- Maintain smoke-tested paths for Claude Code, Codex, Cursor, and OpenCode.
- Publish compatibility notes for supported Node.js versions and host platforms.
- Reduce duplicated assets and make selective installation easier to understand.
- Curate `good first issue` tasks with small, reproducible acceptance criteria.

## Later: sustainable community maintenance

- Establish a regular upstream review and release cadence.
- Add migration guidance and deprecation windows for user-facing changes.
- Grow a small reviewer group for translations, installers, and harness-specific assets.

## Participate

Use the repository Issue Forms for bugs and proposals. Before a large contribution,
read [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md), and
[UPSTREAM.md](UPSTREAM.md).
