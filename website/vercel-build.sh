#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status
echo "============== VERCEL BUILD DIAGNOSIS =============="
echo "Timestamp: $(date)"
echo "Current directory: $(pwd)"
echo "Parent directory: $(cd .. && pwd)"
echo "User: $(whoami)"

echo "============== ENVIRONMENT =============="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Environment variables (sanitized):"
env | grep -v -E 'PASSWORD|SECRET|TOKEN|KEY' | sort

echo "============== DIRECTORY STRUCTURE =============="
echo "Root directory contents:"
ls -la
echo "src directory contents:"
ls -la src || echo "No src directory found"
echo "public directory contents:"
ls -la public || echo "No public directory found"

echo "============== PACKAGE.JSON =============="
cat package.json

echo "============== NEXT CONFIG =============="
cat next.config.js || echo "No next.config.js found"

echo "============== INSTALLING DEPENDENCIES =============="
npm install

echo "============== BUILDING NEXT.JS APP =============="
npm run build

echo "============== BUILD ARTIFACTS =============="
echo ".next directory contents:"
ls -la .next/ || echo "No .next directory found! Build may have failed."
echo ".next/static directory contents:"
ls -la .next/static/ || echo "No .next/static directory found! Build may be incomplete."

echo "============== BUILD COMPLETE ==============" 