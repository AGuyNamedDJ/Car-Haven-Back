// Imports
const express = require("express");
const { getAllRollsRoyce, getAllRollsRoyceById, getAllRollsRoyceByMake, getAllRollsRoyceByModel, getAllRollsRoyceByYear, getAllRollsRoyceByPrice, getAllRollsRoyceByMileage, getAllRollsRoyceByBodyType, getAllRollsRoyceByExteriorColor, getAllRollsRoyceByInteriorColor } = require('../db/rollsroyce');
const { getManufacturerById } = require("../db/manufacturer");

// .Router Middleware
const rollsRoyceRouter = express.Router();

// Route Handelers
    // GET/rollsRoyce
    rollsRoyceRouter.get('/', async (req, res, next) =>{
    try{
        const rollsRoyce = await getAllRollsRoyce();
        res.send(rollsRoyce) 
    } catch (error) {
        console.log("Error getting all rollsRoyce!")
    }
    });

    // GET/RollsRoyceById 
    rollsRoyceRouter.get('/:carId', async (req, res, next) => {
        const {carId} = req.params 
    try {
        const newRollsRoyceId = await getAllRollsRoyceById (carId)
        res.send(newRollsRoyceId)
        } catch (error) {
            console.log("Error getting all rollsRoyceId!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByMake
    rollsRoyceRouter.get('/:make', async (req, res, next) => {
        const {make} = req.params 
    try {
        const newRollsRoyceMake = await getAllRollsRoyceByMake (make)
        res.send(newRollsRoyceMake)
        } catch (error) {
            console.log("Error getting all rollsRoyceMake!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByModel
    rollsRoyceRouter.get('/:model', async (req, res, next) => {
        const {model} = req.params 
    try {
        const newRollsRoyceModel = await getAllRollsRoyceByModel (model)
        res.send(newRollsRoyceModel)
        } catch (error) {
            console.log("Error getting all rollsRoyceModel!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByYear
    rollsRoyceRouter.get('/:year', async (req, res, next) => {
        const {year} = req.params 
    try {
        const newRollsRoyceYear = await getAllRollsRoyceByYear (year)
        res.send(newRollsRoyceYear)
        } catch (error) {
            console.log("Error getting all rollsRoyceYear!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByPrice
    rollsRoyceRouter.get('/:price', async (req, res, next) => {
        const {price} = req.params 
    try {
        const newRollsRoycePrice = await getAllRollsRoyceByPrice (price)
        res.send(newRollsRoycePrice)
        } catch (error) {
            console.log("Error getting all rollsRoycePrice!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByMileage
    rollsRoyceRouter.get('/:mileage', async (req, res, next) => {
        const {mileage} = req.params 
    try {
        const newRollsRoyceMileage = await getAllRollsRoyceByMileage (mileage)
        res.send(newRollsRoyceMileage)
        } catch (error) {
            console.log("Error getting all rollsRoyceMileage!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByBodyType
    rollsRoyceRouter.get('/:bodyType', async (req, res, next) => {
        const {bodyType} = req.params 
    try {
        const newRollsRoyceBodyType = await getAllRollsRoyceByBodyType (bodyType)
        res.send(newRollsRoyceBodyType)
        } catch (error) {
            console.log("Error getting all rollsRoyceBodyType!")
            console.log(error)
        }
    });

    // GET/RollsRoyceByExteriorColor
    rollsRoyceRouter.get('/:exteriorColor', async (req, res, next) => {
        const {exteriorColor} = req.params 
    try {
        const newRollsRoyceExteriorColor = await getAllRollsRoyceByExteriorColor (exteriorColor)
        res.send(newRollsRoyceExteriorColor)
        } catch (error) {
            console.log("Error getting all rollsRoyceExteriorColor!")
            console.log(error)
        }
    });
    
    // GET/RollsRoyceByInteriorColor
    rollsRoyceRouter.get('/:interiorColor', async (req, res, next) => {
        const {interiorColor} = req.params 
    try {
        const newRollsRoyceInteriorColor = await getAllRollsRoyceByInteriorColor (interiorColor)
        res.send(newRollsRoyceInteriorColor)
        } catch (error) {
            console.log("Error getting all rollsRoyceInteriorColor!")
            console.log(error)
        }
    });

// Exports
module.exports = {rollsRoyceRouter};