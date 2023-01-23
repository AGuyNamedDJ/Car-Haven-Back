// Imports
const express = require("express");
const { getAllBugatti, getAllBugattiById, getAllBugattiByMake, getAllBugattiByModel, getAllBugattiByYear, getAllBugattiByPrice, getAllBugattiByMileage, getAllBugattiByBodyType, getAllBugattiByExteriorColor, getAllBugattiByInteriorColor } = require('../db/bugatti');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const bugattiRouter = express.Router();

// Route Handelers
    // GET/bugatti
    bugattiRouter.get('/', async (req, res, next) =>{
    try{
        const bugatti = await getAllBugatti();
        res.send(bugatti) 
    } catch (error) {
        console.log("Error getting all bugatti!")
    }
    });

    // GET/BugattiById 
    bugattiRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newBugattiId = await getAllBugattiById (carId)
        res.send(newBugattiId)
        } catch (error) {
            console.log("Error getting all bugattiId!")
            console.log(error)
        }
    });

    // GET/BugattiByMake
    bugattiRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newBugattiMake = await getAllBugattiByMake (make)
        res.send(newBugattiMake)
        } catch (error) {
            console.log("Error getting all bugattiMake!")
            console.log(error)
        }
    });

    // GET/BugattiByModel
    bugattiRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newBugattiModel = await getAllBugattiByModel (model)
        res.send(newBugattiModel)
        } catch (error) {
            console.log("Error getting all bugattiModel!")
            console.log(error)
        }
    });

    // GET/BugattiByYear
    bugattiRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newBugattiYear = await getAllBugattiByYear (year)
        res.send(newBugattiYear)
        } catch (error) {
            console.log("Error getting all bugattiYear!")
            console.log(error)
        }
    });

    // GET/BugattiByPrice
    bugattiRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newBugattiPrice = await getAllBugattiByPrice (price)
        res.send(newBugattiPrice)
        } catch (error) {
            console.log("Error getting all bugattiPrice!")
            console.log(error)
        }
    });

    // GET/BugattiByMileage
    bugattiRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newBugattiMileage = await getAllBugattiByMileage (mileage)
        res.send(newBugattiMileage)
        } catch (error) {
            console.log("Error getting all bugattiMileage!")
            console.log(error)
        }
    });

    // GET/BugattiByBodyType
    bugattiRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newBugattiBodyType = await getAllBugattiByBodyType (bodyType)
        res.send(newBugattiBodyType)
        } catch (error) {
            console.log("Error getting all bugattiBodyType!")
            console.log(error)
        }
    });

    // GET/BugattiByExteriorColor
    bugattiRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newBugattiExteriorColor = await getAllBugattiByExteriorColor (exteriorColor)
        res.send(newBugattiExteriorColor)
        } catch (error) {
            console.log("Error getting all bugattiExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/BugattiByInteriorColor
    bugattiRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newBugattiInteriorColor = await getAllBugattiByInteriorColor (interiorColor)
        res.send(newBugattiInteriorColor)
        } catch (error) {
            console.log("Error getting all bugattiInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {bugattiRouter};