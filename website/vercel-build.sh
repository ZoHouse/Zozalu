#!/bin/bash

# Exit on error but print the error message first
set -e

echo "============== VERCEL BUILD DIAGNOSIS =============="
echo "Timestamp: $(date)"
echo "Current directory: $(pwd)"

# Diagnostic information
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# List key directories
echo "Directory contents:"
ls -la

# Check package.json
echo "Package.json contents:"
cat package.json

# Check Next.js config
echo "Next.js config:"
cat next.config.js 2>/dev/null || echo "No next.config.js found"

# Create temp .npmrc to increase verbosity
echo "loglevel=verbose" > .npmrc

# Install dependencies with more verbose output
echo "Installing dependencies..."
npm install --prefer-offline --no-audit --no-fund --loglevel verbose || { echo "DEPENDENCY INSTALLATION FAILED"; exit 1; }

# Build application with increased memory
echo "Building Next.js application with increased memory..."
NODE_OPTIONS="--max-old-space-size=3072" npm run build || { echo "BUILD FAILED"; exit 1; }

# Verify build output
echo "Build output:"
ls -la .next/ || echo "Build failed - no .next directory"

echo "============== BUILD COMPLETE ==============" 