const router = require('express').Router()
const { models: { MaintenanceRequest }} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const maintenaceRequests = await MaintenanceRequest.findAll()
        res.json(maintenaceRequests)
    } catch (err) {
        console.log(`error in maintenance req`,err)
        next(err)
        
    }
})


module.exports = router