// Imports
const express = require("express");
const { getAllFerrari, getAllFerrariById, getAllFerrariByMake, getAllFerrariByModel, getAllFerrariByYear, getAllFerrariByPrice, getAllFerrariByMileage, getAllFerrariByBodyType, getAllFerrariByExteriorColor, getAllFerrariByInteriorColor } = require('../db/ferrari');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const ferrariRouter = express.Router();

// Route Handelers
    // GET/ferrari
    ferrariRouter.get('/', async (req, res, next) =>{
    try{
        const ferrari = await getAllFerrari();
        res.send(ferrari) 
    } catch (error) {
        console.log("Error getting all ferrari!")
    }
    });

    // GET/FerrariById 
    ferrariRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newFerrariId = await getAllFerrariById (carId)
        res.send(newFerrariId)
        } catch (error) {
            console.log("Error getting all ferrariId!")
            console.log(error)
        }
    });

    // GET/FerrariByMake
    ferrariRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newFerrariMake = await getAllFerrariByMake (make)
        res.send(newFerrariMake)
        } catch (error) {
            console.log("Error getting all ferrariMake!")
            console.log(error)
        }
    });

    // GET/FerrariByModel
    ferrariRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newFerrariModel = await getAllFerrariByModel (model)
        res.send(newFerrariModel)
        } catch (error) {
            console.log("Error getting all ferrariModel!")
            console.log(error)
        }
    });

    // GET/FerrariByYear
    ferrariRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newFerrariYear = await getAllFerrariByYear (year)
        res.send(newFerrariYear)
        } catch (error) {
            console.log("Error getting all ferrariYear!")
            console.log(error)
        }
    });

    // GET/FerrariByPrice
    ferrariRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newFerrariPrice = await getAllFerrariByPrice (price)
        res.send(newFerrariPrice)
        } catch (error) {
            console.log("Error getting all ferrariPrice!")
            console.log(error)
        }
    });

    // GET/FerrariByMileage
    ferrariRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newFerrariMileage = await getAllFerrariByMileage (mileage)
        res.send(newFerrariMileage)
        } catch (error) {
            console.log("Error getting all ferrariMileage!")
            console.log(error)
        }
    });

    // GET/FerrariByBodyType
    ferrariRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newFerrariBodyType = await getAllFerrariByBodyType (bodyType)
        res.send(newFerrariBodyType)
        } catch (error) {
            console.log("Error getting all ferrariBodyType!")
            console.log(error)
        }
    });

    // GET/FerrariByExteriorColor
    ferrariRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newFerrariExteriorColor = await getAllFerrariByExteriorColor (exteriorColor)
        res.send(newFerrariExteriorColor)
        } catch (error) {
            console.log("Error getting all ferrariExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/FerrariByInteriorColor
    ferrariRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newFerrariInteriorColor = await getAllFerrariByInteriorColor (interiorColor)
        res.send(newFerrariInteriorColor)
        } catch (error) {
            console.log("Error getting all ferrariInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {ferrariRouter};