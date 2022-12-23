const mongoose = require("mongoose")

const mongoOpts = {
    useNewUrlParser: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    useUnifiedTopology: true
};
const mongoDbConnectionUrl = "mongodb://127.0.0.1:27017/crmdb"

mongoose.set('strictQuery', true);

mongoose.connect(mongoDbConnectionUrl, mongoOpts);

exports.mongoDbConnectionUrl = mongoDbConnectionUrl;
exports.mongoOpts = mongoOpts;