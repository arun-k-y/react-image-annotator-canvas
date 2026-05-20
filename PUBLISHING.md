# Publishing

End-to-end flow for pushing a new release to npm.

## One-time setup

1. **Update repo URLs.** Search [`package.json`](./package.json) for `your-github-username` and replace with the real GitHub owner. The `repository`, `homepage`, and `bugs` fields all reference it.
2. **Verify you're logged in.**
   ```bash
   npm whoami            # should print your npm username
   npm login             # if not logged in
   ```
3. **Verify the name is free** (only required for the first release):
   ```bash
   npm view react-image-annotator-canvas
   # E404 means the name is available
   ```
4. **Enable 2FA on your npm account** (recommended; npm will prompt for an OTP at publish time).

## Cutting a release

```bash
# 1. Make sure working tree is clean
git status

# 2. Bump version. Picks one of: patch | minor | major
npm version patch -m "release: v%s"

# 3. Inspect what will ship before publishing
npm pack --dry-run

# 4. Publish. `prepublishOnly` runs typecheck + build automatically.
npm publish

# 5. Push the version tag git just created
git push --follow-tags
```

`npm publish` will:

1. Run `prepublishOnly` → `npm run typecheck && npm run build`.
2. Produce a tarball containing only what `files` in `package.json` declares (`dist/`, `README.md`, `LICENSE`, `CHANGELOG.md`).
3. Upload to the npm registry (public, since `publishConfig.access` is `"public"`).

## Versioning policy

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: any change that requires consumers to edit code — renamed/removed props, changed prop types, changed default behavior, dropped peer-dep ranges.
- **MINOR**: new optional props, new exports, new opt-in behavior, expanded peer-dep ranges.
- **PATCH**: bug fixes that don't alter the public API; doc-only changes.

Add an entry to [`CHANGELOG.md`](./CHANGELOG.md) for every release.

## Pre-publish smoke test

Before publishing the first version, sanity-check the tarball in a throwaway app:

```bash
# In this repo
npm pack
# → emits react-image-annotator-canvas-0.1.0.tgz

# In a separate empty React project
npm install /absolute/path/to/react-image-annotator-canvas-0.1.0.tgz
```

Then import and render `<ImageAnnotator />` to confirm types resolve and the
component renders. This catches any `files` field misconfigurations that
neither `npm run build` nor TypeScript will surface.

## Rolling back

You can `npm unpublish react-image-annotator-canvas@X.Y.Z` **only within 72
hours** of publishing, and only if no other package depends on that version.
After that window, publish a fix as `X.Y.(Z+1)` instead.
