// Imports
const express = require("express");
const { getAllMcLaren, getAllMcLarenById, getAllMcLarenByMake, getAllMcLarenByModel, getAllMcLarenByYear, getAllMcLarenByPrice, getAllMcLarenByMileage, getAllMcLarenByBodyType, getAllMcLarenByExteriorColor, getAllMcLarenByInteriorColor } = require('../db/mclaren');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const mclarenRouter = express.Router();

// Route Handelers
    // GET/mclaren
    mclarenRouter.get('/', async (req, res, next) =>{
    try{
        const mclaren = await getAllMcLaren();
        res.send(mclaren) 
    } catch (error) {
        console.log("Error getting all mclaren!")
    }
    });

    // GET/McLarenById 
    mclarenRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newMcLarenId = await getAllMcLarenById (carId)
        res.send(newMcLarenId)
        } catch (error) {
            console.log("Error getting all mclarenId!")
            console.log(error)
        }
    });

    // GET/McLarenByMake
    mclarenRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newMcLarenMake = await getAllMcLarenByMake (make)
        res.send(newMcLarenMake)
        } catch (error) {
            console.log("Error getting all mclarenMake!")
            console.log(error)
        }
    });

    // GET/McLarenByModel
    mclarenRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newMcLarenModel = await getAllMcLarenByModel (model)
        res.send(newMcLarenModel)
        } catch (error) {
            console.log("Error getting all mclarenModel!")
            console.log(error)
        }
    });

    // GET/McLarenByYear
    mclarenRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newMcLarenYear = await getAllMcLarenByYear (year)
        res.send(newMcLarenYear)
        } catch (error) {
            console.log("Error getting all mclarenYear!")
            console.log(error)
        }
    });

    // GET/McLarenByPrice
    mclarenRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newMcLarenPrice = await getAllMcLarenByPrice (price)
        res.send(newMcLarenPrice)
        } catch (error) {
            console.log("Error getting all mclarenPrice!")
            console.log(error)
        }
    });

    // GET/McLarenByMileage
    mclarenRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newMcLarenMileage = await getAllMcLarenByMileage (mileage)
        res.send(newMcLarenMileage)
        } catch (error) {
            console.log("Error getting all mclarenMileage!")
            console.log(error)
        }
    });

    // GET/McLarenByBodyType
    mclarenRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newMcLarenBodyType = await getAllMcLarenByBodyType (bodyType)
        res.send(newMcLarenBodyType)
        } catch (error) {
            console.log("Error getting all mclarenBodyType!")
            console.log(error)
        }
    });

    // GET/McLarenByExteriorColor
    mclarenRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newMcLarenExteriorColor = await getAllMcLarenByExteriorColor (exteriorColor)
        res.send(newMcLarenExteriorColor)
        } catch (error) {
            console.log("Error getting all mclarenExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/McLarenByInteriorColor
    mclarenRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newMcLarenInteriorColor = await getAllMcLarenByInteriorColor (interiorColor)
        res.send(newMcLarenInteriorColor)
        } catch (error) {
            console.log("Error getting all mclarenInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {mclarenRouter};