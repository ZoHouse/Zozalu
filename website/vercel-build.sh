#!/bin/bash

echo "Current directory: $(pwd)"
echo "Directory contents:"
ls -la

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

echo "Running Next.js build..."
npm install
npm run build

echo "Build complete. Next.js directory contents:"
ls -la .next/ 