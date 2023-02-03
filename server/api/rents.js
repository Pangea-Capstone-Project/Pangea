const router = require("express").Router();
const Rent = require("../db/models/Rent.js");
const User = require('../db/models/User')

router.route('/')
.get(async (req, res, next) => {
  try {
    const rents = await Rent.findAll({
      order:[['id','ASC']]
    });
    res.json(rents);
  } catch (err) {
    next(err);
  }
})
.post(async (req,res,next) => {
  const user = await User.findByToken(req.headers.authorization);
  try{
    if(user.isAdmin){
      const { price } = req.body;
      //validation
      if( !price){
        res.status(400);
        throw new Error('Please include a price');
      }
 
      //Create rent
      const rent = await Rent.create({price})
      if(rent){
        res.status(201).json({
          price: rent.price,
        })
      }
    } else{
      res.status(401)
      throw new Error('Not authorized');
    }
  } catch(err){
    next(err);
  }
});




router.route('/:rentId')
.get(async (req, res, next) => {
  try {
    const rent = await Rent.findByPk(req.params.rentId);
    res.json(rent);
  } catch (err) {
    next(err);
  }
})
.put(async (req,res,next) => {
  const user = await User.findByToken(req.headers.authorization);
  if(user.isAdmin){
    try{
      const rent = await Rent.findByPk(req.params.rentId);

      if(!rent){
        res.status(404);
        throw new Error('rent not found');
      }else{
        const updatedRent = await rent.update(req.body);
        res.status(202).send(updatedRent);
      }
    } catch(err){
      next(err);
    }
  } else{
    res.status(401);
    throw new Error('Not authorized')
  }
})
.delete(async(req,res,next) => {
  const user = await User.findByToken(req.headers.authorization);
  if(user.isAdmin){
    try{
      const rent = await Rent.findByPk(req.params.rentId);
      if(!rent){
        res.status(404);
        throw new Error('rent not found');
      }else{
        await rent.destroy();
        res.status(200).send('Terminated'); 


      }
    } catch(err){
      next(err);
    }
  } else{
    res.status(401);
    throw new Error('Not authorized');
  }
})


module.exports = router;
