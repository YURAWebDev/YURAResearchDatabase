var config = {};

config.port = process.env.PORT || '3000';
config.host = process.env.HOST || 'localhost';
config.sessionSecret = process.env.SESSION_SECRET || 'e70a1e1ee4b8f662f78'

config.duration = 1000 * 60 * 60 * 24; //one hour

module.exports = config;
