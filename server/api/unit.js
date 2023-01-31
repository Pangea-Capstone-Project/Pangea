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

router.post('/', async (req, res, next) => {
    console.log(`im request.body`,req.body)
    try {
        const units = await Unit.create(req.body)
        res.json(units)
    } catch (error) {
        console.log(`Error unitsPostRoute`, error)
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
    const units = await Unit.update({where: {id: req.params.id}})
    res.json(units)
    } catch (error) {
        console.log(`Error unitsPutRoute`, error)
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
    const units = await Unit.destroy({where: {id: req.params.id}})
    res.json(units)
    } catch (error) {
        console.log(`Error unitsDeleteRoute`, error)
        next(error)
    }
})