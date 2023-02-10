const router = require("express").Router();
const Order = require("../db/models/Order.js");
const User = require("../db/models/User.js");
const Tenant = require("../db/models/Tenant.js");
//retrieving ALL orders, this is admin only
router.get("/", async (req, res, next) => {
	try {
		const allOrders = await Order.findAll();
		res.json(allOrders);
	} catch (error) {
		next(error);
	}
});

//retrieving a single users, entire order history
router.get("/myOrders", async (req, res, next) => {
	try {
		const user = await User.findByToken(req.headers.authorization);
		const orderHistory = await Order.findAll({
			where: {
				tenantId: user.id
			},
		});
		res.json(orderHistory);
	} catch (error) {
		next(error);
	}
});

//creating a new order
router.post("/newOrder", async (req, res, next) => {
	try {
		if (req.headers.authorization) {
			const user = await User.findByToken(req.headers.authorization);
			const tenant = await Tenant.findOne({
				where: { userId: user.id },
			  });
			res.status(201).send(
				await Order.create({
					tenantId: tenant.id,
					order: user.cart,
					address: req.body.address,
					rentDetails: req.body.orderDetails
				})
			);
			return await user.update({ cart: [] });
		}
		return res.status(201).send(
			await Order.create({
				order: req.body.cart,
				address: req.body.address,
				guest: true,
			})
		);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
