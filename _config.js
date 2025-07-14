var config = {}

// MongoDB Atlas configuration using environment variables
const mongoUsername = process.env.MONGODB_USERNAME || 'your_username';
const mongoPassword = process.env.MONGODB_PASSWORD || 'your_password';
const mongoCluster = process.env.MONGODB_CLUSTER || 'moringaip1-copy.mongodb.net';

config.mongoURI = {
    production: `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoCluster}/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoCluster}/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoCluster}/darkroom-test?retryWrites=true&w=majority`,
}

module.exports = config;
