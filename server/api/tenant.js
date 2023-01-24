const router = require("express").Router();
module.exports = router;


const {
    models: { Tenant },
} = require("../db")

router.get("/", async(req,res,next) =>{
    try{
        const tenants = await Tenant.findAll()
        res.json(tenants)
    } catch(err){
        next(err)
        console.log(`Error on Tenant`,err)
    }
});