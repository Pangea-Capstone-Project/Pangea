const router = require("express").Router();
module.exports = router;


const {
    models: { Complex },
} = require("../db")

router.get("/", async(req,res,next) =>{
    try{
        const complexes = await Complex.findAll()
        res.json(complexes)
    } catch(err){
        next(err)
        console.log(`Error on complex`,err)
    }
});