const {Router} = require("express");
const {Customer} = require("../persistence/schema");
const router = Router();

//region POST http://localhost:8100/crm/api/v1/customers
router.post("/crm/api/v1/customers",(req,res)=> {
});
//endregion

//region PUT http://localhost:8100/crm/api/v1/customers/11111111110
router.put("/crm/api/v1/customers/:identity",(req,res)=> {
});
//endregion

//region PATCH http://localhost:8100/crm/api/v1/customers/11111111110
router.patch("/crm/api/v1/customers/:identity",(req,res)=> {
});
//endregion

//region DELETE http://localhost:8100/crm/api/v1/customers/11111111110
router.delete("/crm/api/v1/customers/:identity",(req,res)=> {
});
//endregion

module.exports = {apiCommand: router}