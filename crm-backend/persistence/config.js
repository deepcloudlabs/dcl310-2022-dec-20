const mongoose = require("mongoose")

const mongoOpts = {
    useNewUrlParser: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    useUnifiedTopology: true
};
const mongoDbConnectionUrl = "mongodb://localhost:27017/crmdb"

mongoose.set('strictQuery', true);

mongoose.connect(mongoDbConnectionUrl, mongoOpts);

exports.mongoDbConnectionUrl = mongoDbConnectionUrl;
exports.mongoOpts = mongoOpts;