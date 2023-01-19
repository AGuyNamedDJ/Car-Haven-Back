// Requires
const { client } = require("./index") 

// Bentley cardId = 1;

// getAllBentley
async function getAllBentley () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM bentley;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting bentley!")
        console.log(error);
    }
};

// getAllBentleyById
async function getAllBentleyById (carId) {
    try {
        const { rows: [bentley] } = await client.query (`
        SELECT *
        FROM bentley
        WHERE "carId"=$1;
        `, [carId]);

        return bentley;
    } catch (error){
        console.log("Error getting bentley by id!")
        console.log(error);
    }
};

// getAllBentleyByMake
async function getAllBentleyByMake (make) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "make"=$1;
        `, [make]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by make!")
        console.log(error);
    }
};

// getAllBentleyByModel
async function getAllBentleyByModel (model) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "model"=$1;
        `, [model]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by model!")
        console.log(error);
    }
};


// getAllBentleyByYear
async function getAllBentleyByYear (year) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "year"=$1;
        `, [year]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by year!")
        console.log(error);
    }
};

// getAllBentleyByPrice
async function getAllBentleyByPrice (price) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "price"=$1;
        `, [price]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by price!")
        console.log(error);
    }
};

// getAllBentleyByMileage
async function getAllBentleyByMileage (mileage) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "mileage"=$1;
        `, [mileage]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by mileage!")
        console.log(error);
    }
};

// getAllBentleyByBodyType
async function getAllBentleyByBodyType (bodyType) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by bodyType!")
        console.log(error);
    }
};

// getAllBentleyByExteriorColor
async function getAllBentleyByExteriorColor (exteriorColor) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by exteriorColor!")
        console.log(error);
    }
};

// getAllBentleyByBodyType
async function getAllBentleyByInteriorColor (interiorColor) {
    try{
        const { rows : [bentley ] } = await client.query(`
        SELECT *
        FROM bentley
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return bentley;
    } catch (error) {
        console.log("Error getting bentley by interiorColor!")
        console.log(error);
    }
};


// createBentley
async function createBentley(bentleyData) {
    try {
        const { carId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = breakfastData;
        if (!carId) {
            throw new Error('Breakfast must have a valid department Id')
        }
        const { rows } = await client.query(`
            INSERT INTO breakfast("breakfastName", "departmentId", instructions, description, ingredients, serving_size, time_to_prepare, image)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;
        `, [carId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating bentley!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllBentley,
    getAllBentleyById,
    getAllBentleyByMake,
    getAllBentleyByModel,
    getAllBentleyByYear,
    getAllBentleyByPrice,
    getAllBentleyByMileage,
    getAllBentleyByBodyType,
    getAllBentleyByExteriorColor,
    getAllBentleyByInteriorColor,
    createBentley
}