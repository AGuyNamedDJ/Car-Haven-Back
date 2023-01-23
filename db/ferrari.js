// Requires
const { client } = require("./index") 

// Ferrari cardId = 2;

// getAllFerrari
async function getAllFerrari () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM ferrari;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting ferrari!")
        console.log(error);
    }
};

// getAllFerrariById
async function getAllFerrariById (carId) {
    try {
        const { rows: [ferrari] } = await client.query (`
        SELECT *
        FROM ferrari
        WHERE "carId"=$1;
        `, [carId]);

        return ferrari;
    } catch (error){
        console.log("Error getting ferrari by id!")
        console.log(error);
    }
};

// getAllFerrariByMake
async function getAllFerrariByMake (make) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "make"=$1;
        `, [make]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by make!")
        console.log(error);
    }
};

// getAllFerrariByModel
async function getAllFerrariByModel (model) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "model"=$1;
        `, [model]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by model!")
        console.log(error);
    }
};


// getAllFerrariByYear
async function getAllFerrariByYear (year) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "year"=$1;
        `, [year]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by year!")
        console.log(error);
    }
};

// getAllFerrariByPrice
async function getAllFerrariByPrice (price) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "price"=$1;
        `, [price]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by price!")
        console.log(error);
    }
};

// getAllFerrariByMileage
async function getAllFerrariByMileage (mileage) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "mileage"=$1;
        `, [mileage]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by mileage!")
        console.log(error);
    }
};

// getAllFerrariByBodyType
async function getAllFerrariByBodyType (bodyType) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by bodyType!")
        console.log(error);
    }
};

// getAllFerrariByExteriorColor
async function getAllFerrariByExteriorColor (exteriorColor) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by exteriorColor!")
        console.log(error);
    }
};

// getAllFerrariByInteriorColor
async function getAllFerrariByInteriorColor (interiorColor) {
    try{
        const { rows : [ferrari ] } = await client.query(`
        SELECT *
        FROM ferrari
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return ferrari;
    } catch (error) {
        console.log("Error getting ferrari by interiorColor!")
        console.log(error);
    }
};


// createFerrari
async function createFerrari(ferrariData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = ferrariData;
        if (!manufacturerId) {
            throw new Error('ferrari must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO ferrari("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating ferrari!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllFerrari,
    getAllFerrariById,
    getAllFerrariByMake,
    getAllFerrariByModel,
    getAllFerrariByYear,
    getAllFerrariByPrice,
    getAllFerrariByMileage,
    getAllFerrariByBodyType,
    getAllFerrariByExteriorColor,
    getAllFerrariByInteriorColor,
    createFerrari
}