#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# 1. Lint and Fix
echo "🔍 Running lint:fix..."
npm run lint:fix

# 2. Build
echo "🏗️  Building project..."
npm run build

# 3. Ask for commit message
echo ""
echo "📝 Current Changes:"
git status -s
echo ""

read -p "💬 Enter commit message (default: 'UI refinements and deployment'): " msg
if [ -z "$msg" ]; then
    msg="UI refinements and deployment"
fi

# 4. Commit and Push
echo "💾 Committing changes..."
git add .
# Check if there are changes to commit to avoid error
if git diff-index --quiet HEAD --; then
    echo "ℹ️  No changes to commit."
else
    git commit -m "$msg"
    echo "📤 Pushing to repository..."
    git push origin master
fi

# 5. Deploy to GH Pages
echo "🌐 Deploying to GitHub Pages..."
# Using the existing deploy script which ensures a fresh build
npm run deploy

echo ""
echo "✅ Deployment complete! Your changes are live."
