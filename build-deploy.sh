#!/bin/bash
# ============================================================
# TANSEN - BUILD + DEPLOY SCRIPT
# ============================================================
# Ye script:
# 1. npm run build karta hai
# 2. Build ke baad deployment files auto-restore karta hai
# 3. cPanel pe deploy karta hai
# ============================================================

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUILD_DIR="$PROJECT_DIR/out"
BACKUP_DIR="$PROJECT_DIR/.deploy-files"

echo "🏗️  Step 1: Building Next.js..."
cd "$PROJECT_DIR"
npm run build

echo ""
echo "📁 Step 2: Restoring deployment files..."

# Backup directory se files copy karo
if [ -d "$BACKUP_DIR" ]; then
    cp "$BACKUP_DIR/CNAME" "$BUILD_DIR/CNAME" 2>/dev/null && echo "  ✅ CNAME restored" || echo "  ⚠️  CNAME backup not found"
    cp "$BACKUP_DIR/_headers" "$BUILD_DIR/_headers" 2>/dev/null && echo "  ✅ _headers restored" || echo "  ⚠️  _headers backup not found"
    cp "$BACKUP_DIR/_redirects" "$BUILD_DIR/_redirects" 2>/dev/null && echo "  ✅ _redirects restored" || echo "  ⚠️  _redirects backup not found"
else
    echo "  ⚠️  No backup directory found. Creating from current out/ files..."
    mkdir -p "$BACKUP_DIR"
    [ -f "$BUILD_DIR/CNAME" ] && cp "$BUILD_DIR/CNAME" "$BACKUP_DIR/CNAME"
    [ -f "$BUILD_DIR/_headers" ] && cp "$BUILD_DIR/_headers" "$BACKUP_DIR/_headers"
    [ -f "$BUILD_DIR/_redirects" ] && cp "$BUILD_DIR/_redirects" "$BACKUP_DIR/_redirects"
    echo "  📝 Backup created in .deploy-files/"
fi

echo ""
echo "🚀 Step 3: Deploying to cPanel..."
python3 "$PROJECT_DIR/deploy_v2.py"

echo ""
echo "✅ Deploy complete! Live at: https://tansengurugram.com"
