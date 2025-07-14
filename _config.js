var config = {}

// MongoDB Atlas configuration for MoringaIP1-copy cluster
// Replace <USERNAME> and <PASSWORD> with your actual MongoDB Atlas credentials
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@moringaip1-copy.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@moringaip1-copy.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@moringaip1-copy.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
