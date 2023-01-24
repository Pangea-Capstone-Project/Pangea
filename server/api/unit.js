const router = require("express").Router();
module.exports = router;


const {
    models: { Unit },
} = require("../db")

router.get("/", async(req,res,next) =>{
    try{
        const units = await Unit.findAll()
        res.json(units)
    } catch(err){
        next(err)
        console.log(`Error on units`,err)
    }
});