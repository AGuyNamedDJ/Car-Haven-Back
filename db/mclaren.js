// Requires
const { client } = require("./index") 

// McLaren cardId = 2;

// getAllMcLaren
async function getAllMcLaren () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM mclaren;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting mclaren!")
        console.log(error);
    }
};

// getAllMcLarenById
async function getAllMcLarenById (carId) {
    try {
        const { rows: [mclaren] } = await client.query (`
        SELECT *
        FROM mclaren
        WHERE "carId"=$1;
        `, [carId]);

        return mclaren;
    } catch (error){
        console.log("Error getting mclaren by id!")
        console.log(error);
    }
};

// getAllMcLarenByMake
async function getAllMcLarenByMake (make) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "make"=$1;
        `, [make]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by make!")
        console.log(error);
    }
};

// getAllMcLarenByModel
async function getAllMcLarenByModel (model) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "model"=$1;
        `, [model]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by model!")
        console.log(error);
    }
};


// getAllMcLarenByYear
async function getAllMcLarenByYear (year) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "year"=$1;
        `, [year]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by year!")
        console.log(error);
    }
};

// getAllMcLarenByPrice
async function getAllMcLarenByPrice (price) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "price"=$1;
        `, [price]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by price!")
        console.log(error);
    }
};

// getAllMcLarenByMileage
async function getAllMcLarenByMileage (mileage) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "mileage"=$1;
        `, [mileage]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by mileage!")
        console.log(error);
    }
};

// getAllMcLarenByBodyType
async function getAllMcLarenByBodyType (bodyType) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by bodyType!")
        console.log(error);
    }
};

// getAllMcLarenByExteriorColor
async function getAllMcLarenByExteriorColor (exteriorColor) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by exteriorColor!")
        console.log(error);
    }
};

// getAllMcLarenByInteriorColor
async function getAllMcLarenByInteriorColor (interiorColor) {
    try{
        const { rows : [mclaren ] } = await client.query(`
        SELECT *
        FROM mclaren
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return mclaren;
    } catch (error) {
        console.log("Error getting mclaren by interiorColor!")
        console.log(error);
    }
};


// createMcLaren
async function createMcLaren(mclarenData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = mclarenData;
        if (!manufacturerId) {
            throw new Error('mclaren must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO mclaren("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating mclaren!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllMcLaren,
    getAllMcLarenById,
    getAllMcLarenByMake,
    getAllMcLarenByModel,
    getAllMcLarenByYear,
    getAllMcLarenByPrice,
    getAllMcLarenByMileage,
    getAllMcLarenByBodyType,
    getAllMcLarenByExteriorColor,
    getAllMcLarenByInteriorColor,
    createMcLaren
}