// Requires
const { client } = require("./index") 

// RollsRoyce cardId = 2;

// getAllRollsRoyce
async function getAllRollsRoyce () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM rollsroyce;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting rollsroyce!")
        console.log(error);
    }
};

// getAllRollsRoyceById
async function getAllRollsRoyceById (carId) {
    try {
        const { rows: [rollsroyce] } = await client.query (`
        SELECT *
        FROM rollsroyce
        WHERE "carId"=$1;
        `, [carId]);

        return rollsroyce;
    } catch (error){
        console.log("Error getting rollsroyce by id!")
        console.log(error);
    }
};

// getAllRollsRoyceByMake
async function getAllRollsRoyceByMake (make) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "make"=$1;
        `, [make]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by make!")
        console.log(error);
    }
};

// getAllRollsRoyceByModel
async function getAllRollsRoyceByModel (model) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "model"=$1;
        `, [model]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by model!")
        console.log(error);
    }
};


// getAllRollsRoyceByYear
async function getAllRollsRoyceByYear (year) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "year"=$1;
        `, [year]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by year!")
        console.log(error);
    }
};

// getAllRollsRoyceByPrice
async function getAllRollsRoyceByPrice (price) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "price"=$1;
        `, [price]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by price!")
        console.log(error);
    }
};

// getAllRollsRoyceByMileage
async function getAllRollsRoyceByMileage (mileage) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "mileage"=$1;
        `, [mileage]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by mileage!")
        console.log(error);
    }
};

// getAllRollsRoyceByBodyType
async function getAllRollsRoyceByBodyType (bodyType) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by bodyType!")
        console.log(error);
    }
};

// getAllRollsRoyceByExteriorColor
async function getAllRollsRoyceByExteriorColor (exteriorColor) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return rollsroyce;
    } catch (error) {
        console.log("Error getting rollsroyce by exteriorColor!")
        console.log(error);
    }
};

// getAllRollsRoyceByBodyType
async function getAllRollsRoyceByInteriorColor (interiorColor) {
    try{
        const { rows : [rollsroyce ] } = await client.query(`
        SELECT *
        FROM rollsroyce
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return porschrollsroycee;
    } catch (error) {
        console.log("Error getting rollsroyce by interiorColor!")
        console.log(error);
    }
};


// createRollsRoyce
async function createRollsRoyce(rollsroyceData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = rollsroyceData;
        if (!manufacturerId) {
            throw new Error('rollsroyce must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO rollsroyce("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating rollsroyce!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllRollsRoyce,
    getAllRollsRoyceById,
    getAllRollsRoyceByMake,
    getAllRollsRoyceByModel,
    getAllRollsRoyceByYear,
    getAllRollsRoyceByPrice,
    getAllRollsRoyceByMileage,
    getAllRollsRoyceByBodyType,
    getAllRollsRoyceByExteriorColor,
    getAllRollsRoyceByInteriorColor,
    createRollsRoyce
}