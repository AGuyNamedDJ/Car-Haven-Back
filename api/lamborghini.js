// Imports
const express = require("express");
const { getAllLamborghini, getAllLamborghiniById, getAllLamborghiniByMake, getAllLamborghiniByModel, getAllLamborghiniByYear, getAllLamborghiniByPrice, getAllLamborghiniByMileage, getAllLamborghiniByBodyType, getAllLamborghiniByExteriorColor, getAllLamborghiniByInteriorColor } = require('../db/lamborghini');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const lamborghiniRouter = express.Router();

// Route Handelers
    // GET/lamborghini
    lamborghiniRouter.get('/', async (req, res, next) =>{
    try{
        const lamborghini = await getAllLamborghini();
        res.send(lamborghini) 
    } catch (error) {
        console.log("Error getting all lamborghini!")
    }
    });

    // GET/LamborghiniById 
    lamborghiniRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newLamborghiniId = await getAllLamborghiniById (carId)
        res.send(newLamborghiniId)
        } catch (error) {
            console.log("Error getting all lamborghiniId!")
            console.log(error)
        }
    });

    // GET/LamborghiniByMake
    lamborghiniRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newLamborghiniMake = await getAllLamborghiniByMake (make)
        res.send(newLamborghiniMake)
        } catch (error) {
            console.log("Error getting all lamborghiniMake!")
            console.log(error)
        }
    });

    // GET/LamborghiniByModel
    lamborghiniRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newLamborghiniModel = await getAllLamborghiniByModel (model)
        res.send(newLamborghiniModel)
        } catch (error) {
            console.log("Error getting all lamborghiniModel!")
            console.log(error)
        }
    });

    // GET/LamborghiniByYear
    lamborghiniRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newLamborghiniYear = await getAllLamborghiniByYear (year)
        res.send(newLamborghiniYear)
        } catch (error) {
            console.log("Error getting all lamborghiniYear!")
            console.log(error)
        }
    });

    // GET/LamborghiniByPrice
    lamborghiniRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newLamborghiniPrice = await getAllLamborghiniByPrice (price)
        res.send(newLamborghiniPrice)
        } catch (error) {
            console.log("Error getting all lamborghiniPrice!")
            console.log(error)
        }
    });

    // GET/LamborghiniByMileage
    lamborghiniRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newLamborghiniMileage = await getAllLamborghiniByMileage (mileage)
        res.send(newLamborghiniMileage)
        } catch (error) {
            console.log("Error getting all lamborghiniMileage!")
            console.log(error)
        }
    });

    // GET/LamborghiniByBodyType
    lamborghiniRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newLamborghiniBodyType = await getAllLamborghiniByBodyType (bodyType)
        res.send(newLamborghiniBodyType)
        } catch (error) {
            console.log("Error getting all lamborghiniBodyType!")
            console.log(error)
        }
    });

    // GET/LamborghiniByExteriorColor
    lamborghiniRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newLamborghiniExteriorColor = await getAllLamborghiniByExteriorColor (exteriorColor)
        res.send(newLamborghiniExteriorColor)
        } catch (error) {
            console.log("Error getting all lamborghiniExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/LamborghiniByInteriorColor
    lamborghiniRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newLamborghiniInteriorColor = await getAllLamborghiniByInteriorColor (interiorColor)
        res.send(newLamborghiniInteriorColor)
        } catch (error) {
            console.log("Error getting all lamborghiniInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {lamborghiniRouter};