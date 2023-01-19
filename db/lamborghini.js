// Requires
const { client } = require("./index") 

// Lamborghini cardId = 2;

// getAllLamborghini
async function getAllLamborghini () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM lamborghini;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting lamborghini!")
        console.log(error);
    }
};

// getAllLamborghiniById
async function getAllLamborghiniById (carId) {
    try {
        const { rows: [lamborghini] } = await client.query (`
        SELECT *
        FROM lamborghini
        WHERE "carId"=$1;
        `, [carId]);

        return lamborghini;
    } catch (error){
        console.log("Error getting lamborghini by id!")
        console.log(error);
    }
};

// getAllLamborghiniByMake
async function getAllLamborghiniByMake (make) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "make"=$1;
        `, [make]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by make!")
        console.log(error);
    }
};

// getAllLamborghiniByModel
async function getAllLamborghiniByModel (model) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "model"=$1;
        `, [model]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by model!")
        console.log(error);
    }
};


// getAllLamborghiniByYear
async function getAllLamborghiniByYear (year) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "year"=$1;
        `, [year]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by year!")
        console.log(error);
    }
};

// getAllLamborghiniByPrice
async function getAllLamborghiniByPrice (price) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "price"=$1;
        `, [price]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by price!")
        console.log(error);
    }
};

// getAllLamborghiniByMileage
async function getAllLamborghiniByMileage (mileage) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "mileage"=$1;
        `, [mileage]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by mileage!")
        console.log(error);
    }
};

// getAllLamborghiniByBodyType
async function getAllLamborghiniByBodyType (bodyType) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by bodyType!")
        console.log(error);
    }
};

// getAllLamborghiniByExteriorColor
async function getAllLamborghiniByExteriorColor (exteriorColor) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by exteriorColor!")
        console.log(error);
    }
};

// getAllLamborghiniByBodyType
async function getAllLamborghiniByInteriorColor (interiorColor) {
    try{
        const { rows : [lamborghini ] } = await client.query(`
        SELECT *
        FROM lamborghini
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return lamborghini;
    } catch (error) {
        console.log("Error getting lamborghini by interiorColor!")
        console.log(error);
    }
};


// createLamborghini
async function createLamborghini(lamborghiniData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = lamborghiniData;
        if (!manufacturerId) {
            throw new Error('lamborghini must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO lamborghini("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating lamborghini!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllLamborghini,
    getAllLamborghiniById,
    getAllLamborghiniByMake,
    getAllLamborghiniByModel,
    getAllLamborghiniByYear,
    getAllLamborghiniByPrice,
    getAllLamborghiniByMileage,
    getAllLamborghiniByBodyType,
    getAllLamborghiniByExteriorColor,
    getAllLamborghiniByInteriorColor,
    createLamborghini
}