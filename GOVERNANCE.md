# Governance

## Scope

This repository is a community-maintained distribution of assets derived from
[affaan-m/ECC](https://github.com/affaan-m/ECC), with Chinese documentation,
packaging, and repository-specific maintenance. Original authorship and license
notices are preserved. See [UPSTREAM.md](UPSTREAM.md) for the sync policy.

## Roles

- **Maintainer**: owns roadmap, releases, security response, final merge decisions,
  and upstream synchronization.
- **Reviewer**: reviews changes in an agreed area such as translations, installers,
  skills, or a particular coding harness.
- **Contributor**: improves code, tests, documentation, translations, triage, or
  reproducible bug reports.

Final maintenance responsibility for this distribution currently belongs to
`@loulanyue`. Sustained contributors may become reviewers or maintainers by mutual agreement.

## Decisions

1. Focused fixes and documentation changes are decided through Pull Request review.
2. New public commands, packaging changes, compatibility changes, and large imports
   require an Issue before implementation.
3. Consensus is preferred. If consensus is not possible, the maintainer decides based
   on user impact, compatibility, provenance, and long-term maintenance cost.
4. Upstream-derived changes must identify their source and preserve attribution.

## Response targets

These are maintenance goals, not a commercial SLA:

| Request | Initial response target |
| --- | --- |
| Security report | 3 business days |
| Reproducible bug | 5 business days |
| Pull Request | 7 business days |
| Feature proposal | 10 business days |

## Releases

- Releases follow Semantic Versioning and include upgrade or compatibility notes when needed.
- A release requires passing CI and consistency between `package.json`, `VERSION`,
  `CHANGELOG.md`, the Git tag, and the GitHub Release.
- This distribution does not imply endorsement or support by upstream maintainers.

## Security and conduct

Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).
Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
