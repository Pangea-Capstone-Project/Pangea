const router = require("express").Router();
module.exports = router;

const {
    models: { Tenant, Unit, MaintenanceRequest },
} = require("../db")

const Sequelize = require("sequelize")

// All tenants
router.get("/", async(req,res,next) =>{
    try{
        const tenants = await Tenant.findAll()
        res.json(tenants)
    } catch(err){
        next(err)
        console.log(`Error on Tenant`)
        next(err)
    }
});

router.get('/:id', async (request, response, next) => {
    try {
    // const tenant = await Tenant.findOne({ where: { id:
    // request.params.id }, include: Unit })

    const tenant = await Tenant.findOne({ 
        where: { id: request.params.id }, 
        include: {
            model: Unit,
            attributes: {
                include: [
                    [Sequelize.fn('COUNT', Sequelize.col('unit.maintenanceRequests.id')), 'workOrders']
                ]
            },
            include: {
                model: MaintenanceRequest,
                attributes: []
            }
        },
        group: ['tenant.id', 'unit.id']
    })

    response.send(tenant)
    } catch(error){
    next(error)
    }
    });