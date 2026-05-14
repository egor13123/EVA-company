#!/usr/bin/env bash
# Deploy static export (out/) to Sprinthost via rsync over SSH.
#
# Config: copy .env.deploy.example to .env.deploy.local and fill in values.
# Usage:
#   ./scripts/deploy.sh              build, dry-run, ask, then deploy
#   ./scripts/deploy.sh --yes        same, but skip confirmation
#   ./scripts/deploy.sh --no-build   skip npm run build (re-upload existing out/)
#   ./scripts/deploy.sh --dry-run    only show what would change, do nothing

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

CONFIRM=1
DO_BUILD=1
DRY_RUN_ONLY=0
for arg in "$@"; do
  case "$arg" in
    --yes|-y)     CONFIRM=0 ;;
    --no-build)   DO_BUILD=0 ;;
    --dry-run)    DRY_RUN_ONLY=1 ;;
    -h|--help)
      sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "Unknown argument: $arg" >&2
      exit 2
      ;;
  esac
done

ENV_FILE=".env.deploy.local"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE. Copy .env.deploy.example to $ENV_FILE and fill it in." >&2
  exit 1
fi
# shellcheck disable=SC1090
set -a; source "$ENV_FILE"; set +a

: "${SPRINTHOST_HOST:?SPRINTHOST_HOST not set in $ENV_FILE}"
: "${SPRINTHOST_USER:?SPRINTHOST_USER not set in $ENV_FILE}"
: "${SPRINTHOST_PATH:?SPRINTHOST_PATH not set in $ENV_FILE}"
SPRINTHOST_PORT="${SPRINTHOST_PORT:-22}"

# Guard: do not let rsync --delete loose on / or empty path.
case "$SPRINTHOST_PATH" in
  ""|"/"|"/home"|"/home/"|"~"|"~/")
    echo "Refusing to deploy: SPRINTHOST_PATH ('$SPRINTHOST_PATH') is too broad." >&2
    exit 1
    ;;
esac

if [[ "$DO_BUILD" -eq 1 ]]; then
  echo "==> Building static export..."
  npm run build
fi

if [[ ! -d "out" ]]; then
  echo "out/ directory is missing. Run without --no-build (or 'npm run build') first." >&2
  exit 1
fi

RSYNC_BASE=(
  rsync
  -avz
  --delete
  --human-readable
  --omit-dir-times
  -e "ssh -p ${SPRINTHOST_PORT}"
)

REMOTE="${SPRINTHOST_USER}@${SPRINTHOST_HOST}:${SPRINTHOST_PATH%/}/"

echo "==> Dry run against ${REMOTE}"
"${RSYNC_BASE[@]}" --dry-run --itemize-changes out/ "$REMOTE"

if [[ "$DRY_RUN_ONLY" -eq 1 ]]; then
  echo "Dry run only — no files changed."
  exit 0
fi

if [[ "$CONFIRM" -eq 1 ]]; then
  read -r -p "Apply these changes to ${REMOTE}? [y/N] " reply
  case "$reply" in
    y|Y|yes|YES) ;;
    *) echo "Aborted."; exit 1 ;;
  esac
fi

echo "==> Uploading..."
"${RSYNC_BASE[@]}" out/ "$REMOTE"

echo "==> Done. Open https://eva-tsk.ru/ to verify."
