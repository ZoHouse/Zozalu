#!/bin/bash

# ============== VERCEL BUILD DIAGNOSIS ==============
echo "============== VERCEL BUILD DIAGNOSIS =============="
echo "Timestamp: $(date)"
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Directory contents:"
ls -la

echo "Package.json contents:"
cat package.json

echo "Next.js config:"
cat next.config.js

echo "TSConfig contents:"
cat tsconfig.json

echo "Examining PostCSS config:"
cat postcss.config.js

echo "Examining src/components directory:"
ls -la src/components

# Create .npmrc with verbose settings
echo "loglevel=verbose" > .npmrc

# Force clear any node_modules to prevent issues
echo "Clearing any existing node_modules..."
rm -rf node_modules
rm -rf .next

# Install all dependencies including devDependencies
echo "Installing dependencies with legacy-peer-deps..."
npm install --ignore-workspace --legacy-peer-deps --prefer-offline --no-audit --no-fund --loglevel verbose || {
    echo "DEPENDENCY INSTALLATION FAILED"
    exit 1
}

# Verify PostCSS plugin installation
echo "Checking if postcss-import is installed:"
npm list postcss-import

# Increase memory limit for Next.js build
export NODE_OPTIONS="--max-old-space-size=3072"

# Run the build with error handling
echo "Building Next.js application with increased memory..."
npm run build || {
    echo "BUILD FAILED: Next.js build encountered an error"
    exit 1
}

# Verify the build output
echo "Checking build output directory contents:"
if [ -d ".next" ]; then
    ls -la .next
    echo "============== BUILD COMPLETE =============="
else
    echo "BUILD ERROR: .next directory not found"
    exit 1
fi 