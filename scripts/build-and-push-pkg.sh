#!/usr/bin/env bash
set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PKG_DIR="$REPO_ROOT/packages/ui"
TMP_DIST="$(mktemp -d)"

echo "==> Building @kurzagin/ui..."
cd "$PKG_DIR"
bun run build

echo "==> Preparing standalone distribution branch..."
mkdir -p "$TMP_DIST"
cp "$PKG_DIR/package.json" "$TMP_DIST/"
cp -r "$PKG_DIR/dist" "$TMP_DIST/"
cp -r "$PKG_DIR/src" "$TMP_DIST/"
[ -f "$REPO_ROOT/README.md" ] && cp "$REPO_ROOT/README.md" "$TMP_DIST/"

cd "$TMP_DIST"
git init -b pkg
git config user.name "Kurzagin"
git config user.email "contact@kurzagin.com"
git add -A
git commit -m "release: update @kurzagin/ui package distribution"
git remote add origin https://github.com/kurzagin/ui.git

echo "==> Pushing to origin pkg branch..."
git push origin pkg --force

rm -rf "$TMP_DIST"
echo "==> Published successfully to github:kurzagin/ui#pkg"
