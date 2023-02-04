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

// Create Work Order Route
router.post('/', async (req, res, next) => {
    try {
        const maintenanceRequest = await MaintenanceRequest.create(req.body)
        res.json(maintenanceRequest)
    } catch (error) {
        next(error)
    }
})

// Update Work Order Route
router.put('/:maintenanceRequestId', async(req,res,next) =>{
    try{
        const maintenanceRequest = await MaintenanceRequest.update(req.body, {where: {id: req.params.maintenanceRequestId}})
        res.json(maintenanceRequest)
    } catch(err){
        console.log(`error in update maintenance route`, err)
        next(err)
    }
})

// Delete Work Order Route
router.delete('/:maintenanceRequestId', async(req,res,next) =>{
    try{
        const maintenanceRequest = await MaintenanceRequest.destroy({where: {id: req.params.maintenanceRequestId}})
        res.json(maintenanceRequest)
    } catch(err){
        console.log(`error in delete maintenance route`, err)
        next(err)
    }
})



module.exports = router