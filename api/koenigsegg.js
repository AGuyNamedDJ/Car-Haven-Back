// Imports
const express = require("express");
const { getAllKoenigsegg, getAllKoenigseggById, getAllKoenigseggByMake, getAllKoenigseggByModel, getAllKoenigseggByYear, getAllKoenigseggByPrice, getAllKoenigseggByMileage, getAllKoenigseggByBodyType, getAllKoenigseggByExteriorColor, getAllKoenigseggByInteriorColor } = require('../db/koenigsegg');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const koenigseggRouter = express.Router();

// Route Handelers
    // GET/koenigsegg
    koenigseggRouter.get('/', async (req, res, next) =>{
    try{
        const koenigsegg = await getAllKoenigsegg();
        res.send(koenigsegg) 
    } catch (error) {
        console.log("Error getting all koenigsegg!")
    }
    });

    // GET/KoenigseggById 
    koenigseggRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newKoenigseggId = await getAllKoenigseggById (carId)
        res.send(newKoenigseggId)
        } catch (error) {
            console.log("Error getting all koenigseggId!")
            console.log(error)
        }
    });

    // GET/KoenigseggByMake
    koenigseggRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newKoenigseggMake = await getAllKoenigseggByMake (make)
        res.send(newKoenigseggMake)
        } catch (error) {
            console.log("Error getting all koenigseggMake!")
            console.log(error)
        }
    });

    // GET/KoenigseggByModel
    koenigseggRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newKoenigseggModel = await getAllKoenigseggByModel (model)
        res.send(newKoenigseggModel)
        } catch (error) {
            console.log("Error getting all koenigseggModel!")
            console.log(error)
        }
    });

    // GET/KoenigseggByYear
    koenigseggRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newKoenigseggYear = await getAllKoenigseggByYear (year)
        res.send(newKoenigseggYear)
        } catch (error) {
            console.log("Error getting all koenigseggYear!")
            console.log(error)
        }
    });

    // GET/KoenigseggByPrice
    koenigseggRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newKoenigseggPrice = await getAllKoenigseggByPrice (price)
        res.send(newKoenigseggPrice)
        } catch (error) {
            console.log("Error getting all koenigseggPrice!")
            console.log(error)
        }
    });

    // GET/KoenigseggByMileage
    koenigseggRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newKoenigseggMileage = await getAllKoenigseggByMileage (mileage)
        res.send(newKoenigseggMileage)
        } catch (error) {
            console.log("Error getting all koenigseggMileage!")
            console.log(error)
        }
    });

    // GET/KoenigseggByBodyType
    koenigseggRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newKoenigseggBodyType = await getAllKoenigseggByBodyType (bodyType)
        res.send(newKoenigseggBodyType)
        } catch (error) {
            console.log("Error getting all koenigseggBodyType!")
            console.log(error)
        }
    });

    // GET/KoenigseggByExteriorColor
    koenigseggRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newKoenigseggExteriorColor = await getAllKoenigseggByExteriorColor (exteriorColor)
        res.send(newKoenigseggExteriorColor)
        } catch (error) {
            console.log("Error getting all koenigseggExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/KoenigseggByInteriorColor
    koenigseggRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newKoenigseggInteriorColor = await getAllKoenigseggByInteriorColor (interiorColor)
        res.send(newKoenigseggInteriorColor)
        } catch (error) {
            console.log("Error getting all koenigseggInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {koenigseggRouter};