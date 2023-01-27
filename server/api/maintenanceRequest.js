const router = require('express').Router()
const { models: { MaintenanceRequest }} = require('../db')
// All Work Order Route
router.get('/', async (req, res, next) => {
    try {
        const maintenaceRequests = await MaintenanceRequest.findAll()
        res.json(maintenaceRequests);
    } catch (err) {
        console.log(`error in maintenance req`,err)
        next(err)
        
    }
})
// Single Work Order Route
router.get('/:maintenanceRequestId', async(req,res,next) =>{
    try{
        const maintenanceRequest = await MaintenanceRequest.findByPk(req.params.maintenanceRequestId);
        res.send(maintenanceRequest);
    } catch(err){
        console.log(`error in single maintenance route`, err)
        next(err)
    }
})


module.exports = router