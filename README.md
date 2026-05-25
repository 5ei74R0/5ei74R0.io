# 5ei74R0.io

Portfolio static site built with Nuxt 3 and Tailwind CSS.

## Development

```bash
mise install
pnpm install
pnpm dev
```

`pnpm` and Node.js are pinned in `.mise.toml`, so no global pnpm install is required.

## GitHub Pages

This repository is configured for project-page hosting at `/5ei74R0.io/`.
Run the static generation command before publishing:

```bash
pnpm generate
```

Generated files are emitted to `docs/`, including `.nojekyll` so GitHub Pages serves `_nuxt/` assets correctly.

## Supply-chain policy

This project is pinned to pnpm and uses `pnpm-workspace.yaml` for dependency policy:

- `minimumReleaseAge: 10080` blocks package versions published less than 7 days ago.
- `minimumReleaseAgeStrict: true` fails resolution instead of falling back to a too-new version.
- dependency build scripts are denied by default, with explicit approval only for `esbuild` and `fsevents`.
- `savePrefix: ""` keeps newly-added dependency specs exact by default.

Public npm registry traffic is routed through Takumi Guard via `.npmrc`.
The Nord palette is vendored directly in `tailwind.config.js` to avoid a small archived GitHub dependency.
