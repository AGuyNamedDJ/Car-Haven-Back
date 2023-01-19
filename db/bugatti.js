// Requires
const { client } = require("./index") 

// Bugatti cardId = 2;

// getAllBugatti
async function getAllBugatti () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM bugatti;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting bugatti!")
        console.log(error);
    }
};

// getAllBugattiById
async function getAllBugattiById (carId) {
    try {
        const { rows: [bugatti] } = await client.query (`
        SELECT *
        FROM bugatti
        WHERE "carId"=$1;
        `, [carId]);

        return bugatti;
    } catch (error){
        console.log("Error getting bugatti by id!")
        console.log(error);
    }
};

// getAllBugattiByMake
async function getAllBugattiByMake (make) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "make"=$1;
        `, [make]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by make!")
        console.log(error);
    }
};

// getAllBugattiByModel
async function getAllBugattiByModel (model) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "model"=$1;
        `, [model]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by model!")
        console.log(error);
    }
};


// getAllBugattiByYear
async function getAllBugattiByYear (year) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "year"=$1;
        `, [year]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by year!")
        console.log(error);
    }
};

// getAllBugattiByPrice
async function getAllBugattiByPrice (price) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "price"=$1;
        `, [price]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by price!")
        console.log(error);
    }
};

// getAllBugattiByMileage
async function getAllBugattiByMileage (mileage) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "mileage"=$1;
        `, [mileage]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by mileage!")
        console.log(error);
    }
};

// getAllBugattiByBodyType
async function getAllBugattiByBodyType (bodyType) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by bodyType!")
        console.log(error);
    }
};

// getAllBugattiByExteriorColor
async function getAllBugattiByExteriorColor (exteriorColor) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by exteriorColor!")
        console.log(error);
    }
};

// getAllBugattiByBodyType
async function getAllBugattiByInteriorColor (interiorColor) {
    try{
        const { rows : [bugatti ] } = await client.query(`
        SELECT *
        FROM bugatti
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return bugatti;
    } catch (error) {
        console.log("Error getting bugatti by interiorColor!")
        console.log(error);
    }
};


// createBugatti
async function createBugatti(bugattiData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = bugattiData;
        if (!manufacturerId) {
            throw new Error('bugatti must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO bugatti("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating bugatti!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllBugatti,
    getAllBugattiById,
    getAllBugattiByMake,
    getAllBugattiByModel,
    getAllBugattiByYear,
    getAllBugattiByPrice,
    getAllBugattiByMileage,
    getAllBugattiByBodyType,
    getAllBugattiByExteriorColor,
    getAllBugattiByInteriorColor,
    createBugatti
}