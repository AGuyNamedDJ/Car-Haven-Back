// Imports
const express = require("express");
const { getAllPorsche, getAllPorscheById, getAllPorscheByMake, getAllPorscheByModel, getAllPorscheByYear, getAllPorscheByPrice, getAllPorscheByMileage, getAllPorscheByBodyType, getAllPorscheByExteriorColor, getAllPorscheByInteriorColor } = require('../db/porsche');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const porscheRouter = express.Router();

// Route Handelers
    // GET/porsche
    porscheRouter.get('/', async (req, res, next) =>{
    try{
        const porsche = await getAllPorsche();
        res.send(porsche) 
    } catch (error) {
        console.log("Error getting all porsche!")
    }
    });

    // GET/PorscheById 
    porscheRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newPorscheId = await getAllPorscheById (carId)
        res.send(newPorscheId)
        } catch (error) {
            console.log("Error getting all porscheId!")
            console.log(error)
        }
    });

    // GET/PorscheByMake
    porscheRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newPorscheMake = await getAllPorscheByMake (make)
        res.send(newPorscheMake)
        } catch (error) {
            console.log("Error getting all porscheMake!")
            console.log(error)
        }
    });

    // GET/PorscheByModel
    porscheRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newPorscheModel = await getAllPorscheByModel (model)
        res.send(newPorscheModel)
        } catch (error) {
            console.log("Error getting all porscheModel!")
            console.log(error)
        }
    });

    // GET/PorscheByYear
    porscheRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newPorscheYear = await getAllPorscheByYear (year)
        res.send(newPorscheYear)
        } catch (error) {
            console.log("Error getting all porscheYear!")
            console.log(error)
        }
    });

    // GET/PorscheByPrice
    porscheRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newPorschePrice = await getAllPorscheByPrice (price)
        res.send(newPorschePrice)
        } catch (error) {
            console.log("Error getting all porschePrice!")
            console.log(error)
        }
    });

    // GET/PorscheByMileage
    porscheRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newPorscheMileage = await getAllPorscheByMileage (mileage)
        res.send(newPorscheMileage)
        } catch (error) {
            console.log("Error getting all porscheMileage!")
            console.log(error)
        }
    });

    // GET/PorscheByBodyType
    porscheRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newPorscheBodyType = await getAllPorscheByBodyType (bodyType)
        res.send(newPorscheBodyType)
        } catch (error) {
            console.log("Error getting all porscheBodyType!")
            console.log(error)
        }
    });

    // GET/PorscheByExteriorColor
    porscheRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newPorscheExteriorColor = await getAllPorscheByExteriorColor (exteriorColor)
        res.send(newPorscheExteriorColor)
        } catch (error) {
            console.log("Error getting all porscheExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/PorscheByInteriorColor
    porscheRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newPorscheInteriorColor = await getAllPorscheByInteriorColor (interiorColor)
        res.send(newPorscheInteriorColor)
        } catch (error) {
            console.log("Error getting all porscheInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {porscheRouter};