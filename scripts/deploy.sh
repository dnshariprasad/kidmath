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

# 3. Stage and Commit changes
echo "💾 Staging all changes..."
git add .

# Set default commit message
msg="Automated deployment: UI refinements and updates"

# Check if there are changes to commit to avoid error
if git diff-index --quiet HEAD --; then
    echo "ℹ️  No changes to commit."
else
    echo "📝 Committing changes..."
    git commit -m "$msg"
    echo "📤 Pushing to repository..."
    git push origin master
fi

# 4. Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
# This command also runs 'npm run build' internally as per package.json
npm run deploy

echo ""
echo "✅ Deployment complete! Your changes are live."
