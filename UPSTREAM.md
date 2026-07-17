# Upstream relationship and synchronization

## Provenance

This repository contains work derived from
[affaan-m/ECC](https://github.com/affaan-m/ECC), originally published by Affaan Mustafa
and its contributors under the MIT License. The original copyright and license notice
remain in [LICENSE](LICENSE), and contributor credits remain in the changelog and source.

`loulanyue/awesome-claude-notes` is an independently maintained distribution focused on
Chinese documentation, packaging, and practical cross-harness usage. It is not the official
upstream repository and does not imply upstream endorsement.

## Sync policy

Each upstream sync should:

1. Record the upstream repository, tag or commit range in the Pull Request.
2. Separate imported upstream changes from local distribution changes where practical.
3. Preserve license headers, authorship, and contributor credits.
4. Reconcile local documentation, installation paths, and compatibility notes.
5. Run the full validation suite before merge.
6. Describe skipped upstream changes and the reason when they affect user expectations.

## Conflict policy

- Security and correctness fixes take priority.
- Localized documentation and distribution-specific installation paths may intentionally differ.
- Public API or packaging divergence must be documented in the changelog.
- If this distribution can no longer maintain a safe and understandable delta, it should
  pause releases or archive rather than silently drift.
