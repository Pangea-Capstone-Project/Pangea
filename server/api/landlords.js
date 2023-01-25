const router = require('express').Router()
const { models: { Landlord }} = require('../db')
module.exports = router

router.get('/', async (request, response, next) => {
    try {
    const landlords = Landlord.findAll()
    response.json(landlords)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (request, response, next) => {
    try {
    const landlord = Landlord.findOne({where: {id: request.params.id}})
    response.json(landlord)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (request, response, next) => {
    try {
        const landlord = Landlord.create(request.body)
        response.json(landlord)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (request, response, next) => {
    try {
    const landlord = Landlord.update({where: {id: request.params.id}})
    response.json(landlord)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (request, response, next) => {
    try {
    const landlord = Landlord.destroy({where: {id: request.params.id}})
    response.json(landlord)
    } catch (error) {
        next(error)
    }
})