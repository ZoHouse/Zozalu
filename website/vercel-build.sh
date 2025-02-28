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

# Create .npmrc with verbose settings
echo "loglevel=verbose" > .npmrc

# Install all dependencies including devDependencies
echo "Installing dependencies..."
npm install --ignore-workspace --prefer-offline --no-audit --no-fund --loglevel verbose

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