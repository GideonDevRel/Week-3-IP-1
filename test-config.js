// Test configuration for local development
var config = {}

// Simple test configuration that doesn't require MongoDB Atlas
config.mongoURI = {
    production: 'mongodb://localhost:27017/darkroom',
    development: 'mongodb://localhost:27017/darkroom-dev', 
    test: 'mongodb://localhost:27017/darkroom-test'
}

module.exports = config;