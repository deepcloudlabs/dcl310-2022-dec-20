const {Router} = require("express");
const {Customer} = require("../persistence/schema");
const router = Router();
const updatableFields = ["photo", "email", "phones"];

//region POST http://localhost:8100/crm/api/v1/customers
router.post("/crm/api/v1/customers",(req,res)=> {
    const customerBody = req.body;
    const customer = new Customer(customerBody);
    customer.save((err,result)=>{
        res.set("Content-Type","application/json");
        if (err){
            res.status(400).send({"reason": err});
        } else {
            res.status(200).send({"status": "OK"});
        }
    });
});
//endregion

function updateCustomer(req, res) {
    const identity = req.params.identity;
    const customerBody = req.body;
    const updatedCustomer = {};
    for (let prop in customerBody) {
        if (updatableFields.includes(prop))
            updatedCustomer[prop] = customerBody[prop];
    }
    Customer.updateOne(
        {_id: identity},
        {$set: updatedCustomer},
        {upsert: false},
        (err, result) => {
            res.set("Content-Type", "application/json");
            if (err) {
                res.status(404).send({"reason": err});
            } else {
                res.status(200).send({"status": "OK"});
            }
        });
}

//region PUT http://localhost:8100/crm/api/v1/customers/11111111110
router.put("/crm/api/v1/customers/:identity",(req,res)=> {
    updateCustomer(req, res);
});
//endregion

//region PATCH http://localhost:8100/crm/api/v1/customers/11111111110
router.patch("/crm/api/v1/customers/:identity",(req,res)=> {
    updateCustomer(req, res);
});
//endregion

//region DELETE http://localhost:8100/crm/api/v1/customers/11111111110
router.delete("/crm/api/v1/customers/:identity",(req,res)=> {
    const identity = req.params.identity;
    Customer.findOneAndDelete(
        {_id: identity},
        {},
        (err,employee)=>{
            if(employee ==null){
                res.status(404).send({reason: "cannot find customer to delete."});
            } else {
                res.status(200).send(employee);
            }
        }
    )
});
//endregion

module.exports = {apiCommand: router}