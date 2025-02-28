#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status
echo "============== VERCEL BUILD DIAGNOSIS =============="
echo "Timestamp: $(date)"
echo "Current directory: $(pwd)"

# Diagnostic information
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# List key directories
echo "Directory contents:"
ls -la

# Check Next.js config
echo "Next.js config:"
cat next.config.js 2>/dev/null || echo "No next.config.js found"

# Install dependencies
echo "Installing dependencies..."
npm install --no-audit --no-fund

# Build application
echo "Building Next.js application..."
npm run build

# Verify build output
echo "Build output:"
ls -la .next/ || echo "Build failed - no .next directory"

echo "============== BUILD COMPLETE ==============" 