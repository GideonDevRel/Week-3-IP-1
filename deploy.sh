#!/bin/bash

# Deployment script for Gallery App

echo "🚀 Starting deployment process..."

# Check if MongoDB Atlas credentials are configured
if grep -q "<USERNAME>" _config.js; then
    echo "⚠️  MongoDB Atlas credentials not configured!"
    echo "Please update _config.js with your actual MongoDB Atlas credentials"
    echo "Follow the instructions in SETUP_INSTRUCTIONS.md"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run tests
echo "🧪 Running tests..."
npm test

if [ $? -eq 0 ]; then
    echo "✅ Tests passed!"
else
    echo "❌ Tests failed!"
    exit 1
fi

# Start the server
echo "🌐 Starting server..."
npm start