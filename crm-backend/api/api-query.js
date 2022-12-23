const {api} = require("./api-config");
const {Customer} = require("../persistence/schema");

// GET http://localhost:8100/crm/api/v1/customers/11111111110
api.get("/crm/api/v1/customers/:identity",(req,res)=>{
    const identity = req.params.identity;
    Customer.findOne(
        {_id: identity},
        {},
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