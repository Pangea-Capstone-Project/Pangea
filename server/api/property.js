const router = require("express").Router();
module.exports = router;
const { useSelector } = require('react-redux');

const {
  models: { Property, Landlord, User},
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const properties = await Property.findAll();
    res.json(properties);
  } catch (err) {
    next(err);
    console.log(`Error on Property`, err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const property = await Property.findOne({ where: { id: req.params.id } });
    res.json(property);
  } catch (err) {
    next(err);
    console.log(`Error on Property`, err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const property = await Property.create(req.body);
    res.json(property);
  } catch (err) {
    next(err);
    console.log(`Error on Property`, err);
  }
});

router.put("/:id", async (req, res, next) => {
    try {
        console.log(`req.body`, req.body)
        const { propertyName, address, landlordId } = req.body;
        console.log(`req from property`, landlordId);
      const property = await Property.create({
        propertyName,
        address,
        landlordId
      },
      );
      res.json(property);
    } catch (err) {
      next(err);
      console.log(`Error on Property`, err);
    }
  });



router.delete("/:id", async (req, res, next) => {
  try {
    const property = await Property.destroy({ where: { id: req.params.id } });
    res.json(property);
  } catch (err) {
    next(err);
    console.log(`Error on property`, err);
  }
});
