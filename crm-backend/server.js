const mongoose = require("mongoose");
const mongooseConfig = require("./persistence/config");
const {Customer} = require("./persistence/schema");

const {api} = require("./api/api-config");
//const {apiQuery} = require("./api/api-query");
const {apiCommand} = require("./api/api-command");

api.listen(8100,()=>{
    console.log("REST Api is up and running at port 8100...")
});


