// Imports
const express = require ('express');
const { getAllManufacturer, getManufacturerById } = require('../db/manufacturer');

// Router Middleware
const manufacturerRouter = express.Router();

// Router Handlers
    // GET/manufacturer
    manufacturerRouter.get("/", async (req, res, next) => {
        console.log("Handling GET /manufacturer");
        try {
            const manufacturer = await getAllManufacturer();
            res.send(manufacturer)
        } catch (error) {
            console.log(error);
            res.status(500).json({
              error: "Unable to retrieve manufacturers"
            });
          }
        });
    
// GET/manufacturer/:manufacturerId
manufacturerRouter.get("/:manufacturerId", async (req, res, next) => {
    console.log("Handling GET /manufacturer/:manufacturerId");
    try {
        const { manufacturerId } = req.params
        const response = await getManufacturerById(manufacturerId)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})

// Exports
module.exports = {manufacturerRouter}