# bfanger.nl

[Bob Fanger's portfolio](https://bfanger.nl/) website.

Build with [SvelteKit](https://kit.svelte.dev/) and hosted by github.

## Setup (macOS)

```sh
# Install git precommit hook
echo "#\!/bin/sh\nyarn run precommit" > .git/hooks/pre-commit && chmod a+x .git/hooks/pre-commit
# Install cli tools
brew install imagemagick pngquant
# Run local dev
yarn install
yarn dev
```
