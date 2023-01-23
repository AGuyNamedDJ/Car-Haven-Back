// Imports
const express = require("express");
const { getAllBentley, getAllBentleyById, getAllBentleyByMake, getAllBentleyByModel, getAllBentleyByYear, getAllBentleyByPrice, getAllBentleyByMileage, getAllBentleyByBodyType, getAllBentleyByExteriorColor, getAllBentleyByInteriorColor } = require('../db/Bentley');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const bentleyRouter = express.Router();

// Route Handelers
    // GET/bentley
    bentleyRouter.get('/', async (req, res, next) =>{
    try{
        const bentley = await getAllBentley();
        res.send(bentley) 
    } catch (error) {
        console.log("Error getting all bentley!")
    }
    });

    // GET/BentleyById 
    bentleyRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newBentleyId = await getAllBentleyById (carId)
        res.send(newBentleyId)
        } catch (error) {
            console.log("Error getting all bentleyId!")
            console.log(error)
        }
    });

    // GET/BentleyByMake
    bentleyRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newBentleyMake = await getAllBentleyByMake (make)
        res.send(newBentleyMake)
        } catch (error) {
            console.log("Error getting all bentleyMake!")
            console.log(error)
        }
    });

    // GET/BentleyByModel
    bentleyRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newBentleyModel = await getAllBentleyByModel (model)
        res.send(newBentleyModel)
        } catch (error) {
            console.log("Error getting all bentleyModel!")
            console.log(error)
        }
    });

    // GET/BentleyByYear
    bentleyRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newBentleyYear = await getAllBentleyByYear (year)
        res.send(newBentleyYear)
        } catch (error) {
            console.log("Error getting all bentleyYear!")
            console.log(error)
        }
    });

    // GET/BentleyByPrice
    bentleyRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newBentleyPrice = await getAllBentleyByPrice (price)
        res.send(newBentleyPrice)
        } catch (error) {
            console.log("Error getting all bentleyPrice!")
            console.log(error)
        }
    });

    // GET/BentleyByMileage
    bentleyRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newBentleyMileage = await getAllBentleyByMileage (mileage)
        res.send(newBentleyMileage)
        } catch (error) {
            console.log("Error getting all bentleyMileage!")
            console.log(error)
        }
    });

    // GET/BentleyByBodyType
    bentleyRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newBentleyBodyType = await getAllBentleyByBodyType (bodyType)
        res.send(newBentleyBodyType)
        } catch (error) {
            console.log("Error getting all bentleyBodyType!")
            console.log(error)
        }
    });

    // GET/BentleyByExteriorColor
    bentleyRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newBentleyExteriorColor = await getAllBentleyByExteriorColor (exteriorColor)
        res.send(newBentleyExteriorColor)
        } catch (error) {
            console.log("Error getting all bentleyExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/BentleyByInteriorColor
    bentleyRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newBentleyInteriorColor = await getAllBentleyByInteriorColor (interiorColor)
        res.send(newBentleyInteriorColor)
        } catch (error) {
            console.log("Error getting all bentleyInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {bentleyRouter};