const {tcKimlikNoValidator, NO_IMAGE} = require("../utils");
const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
    "type": {
        type: String,
        required: true,
        enum: ["HOME", "OFFICE", "MOBILE"]
    },
    "countryCode": {
        type: Number,
        required: true
    },
    "cityCode": {
        type: Number,
        required: true
    },
    "number": {
        type: String,
        required: true,
        minLength: 5
    }
});

const customerSchema = new mongoose.Schema({
    //"_id": mongoose.Schema.Types.ObjectId,
    "_id": {
        type: String,
        required: true,
        unique: true,
        validate: [tcKimlikNoValidator, "You must provide a valid Identity No."]
    },
    "firstName": {
        type: String,
        required: true,
        minLength: 2
    },
    "lastName": {
        type: String,
        required: true,
        minLength: 2
    },
    "email": {
        type: String,
        required: true,
        regexp: "[a-zA-Z0-9]+@[a-zA-Z0-9]+\.\w{2,3}"
    },
    "phones": [phoneSchema],
    "photo": {
        type: String,
        required: false,
        default: NO_IMAGE
    }
});
const Customer = mongoose.model("customers",customerSchema);

exports.Customer = Customer;