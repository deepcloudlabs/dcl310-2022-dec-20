const {Router} = require("express");
const {Customer} = require("../persistence/schema");
const router = Router();

//region GET http://localhost:8100/crm/api/v1/customers/11111111110/photo
router.get("/crm/api/v1/customers/:identity/photo",(req,res)=>{
    const identity = req.params.identity;
    Customer.findOne(
        {_id: identity},
        {"photo": true},
        {},
        function(err,customer){
            if (err){

            } else {
                res.set("Content-Type","application/json");
                res.status(200).send({photo: customer.photo});
            }
        }
    );

});
//endregion

//region GET http://localhost:8100/crm/api/v1/customers/11111111110?photo=true
router.get("/crm/api/v1/customers/:identity",(req,res)=>{
    const identity = req.params.identity;
    const withPhoto= req.query.photo || false;
    const projection = {};
    if (!withPhoto)
        projection.photo = false;
    Customer.findOne(
        {_id: identity},
        projection,
        {},
        function(err,customer){
            if (err){

            } else {
                res.set("Content-Type","application/json");
                res.status(200).send(customer);
            }
        }
    );
});
//endregion

//region GET http://localhost:8100/crm/api/v1/customers?page=10&size=20
router.get("/crm/api/v1/customers",(req,res)=>{
    const page = req.query.page || 0;
    const size = req.query.size || 10;
    const offset = page * size;
    Customer.find(
        {},
        {"photo": false},
        { skip: offset, limit: size},
        function(err,customers){
            if (err){

            } else {
                res.set("Content-Type","application/json");
                res.status(200).send(customers);
            }
        }
    );
});
//endregion

module.exports = {apiQuery: router}