// const router = require("express").Router();
// module.exports = router;


// const {
//     models: { Complex },
// } = require("../db")

// router.get("/", async(req,res,next) =>{
//     try{
//         const complexes = await Complex.findAll()
//         res.json(complexes)
//     } catch(err){
//         next(err)
//         console.log(`Error on complex`,err)
//     }
// });

// router.get("/:id", async(req,res,next) =>{
//     try{
//         const complex = await Complex.findOne({where: {id: req.params.id}})
//         res.json(complex)
//     } catch(err){
//         next(err)
//         console.log(`Error on complex`,err)
//     }
// });

// router.post("/", async(req,res,next) =>{
//     try{
//         const complex = await Complex.create(req.body)
//         res.json(complex)
//     } catch(err){
//         next(err)
//         console.log(`Error on complex`,err)
//     }
// });

// router.put("/:id", async(req,res,next) =>{
//     try{
//         const complex = await Complex.update({where: {id: req.params.id}})
//         res.json(complex)
//     } catch(err){
//         next(err)
//         console.log(`Error on complex`,err)
//     }
// });

// router.delete("/:id", async(req,res,next) =>{
//     try{
//         const complex = await Complex.destroy({where: {id: req.params.id}})
//         res.json(complex)
//     } catch(err){
//         next(err)
//         console.log(`Error on complex`,err)
//     }
// });

