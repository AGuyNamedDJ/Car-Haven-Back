// Requires
const { client } = require("./index") 

// Porsche cardId = 2;

// getAllPorsche
async function getAllPorsche () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM porsche;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting porsche!")
        console.log(error);
    }
};

// getAllPorscheById
async function getAllPorscheById (carId) {
    try {
        const { rows: [porsche] } = await client.query (`
        SELECT *
        FROM porsche
        WHERE "carId"=$1;
        `, [carId]);

        return porsche;
    } catch (error){
        console.log("Error getting porsche by id!")
        console.log(error);
    }
};

// getAllPorscheByMake
async function getAllPorscheByMake (make) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "make"=$1;
        `, [make]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by make!")
        console.log(error);
    }
};

// getAllPorscheByModel
async function getAllPorscheByModel (model) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "model"=$1;
        `, [model]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by model!")
        console.log(error);
    }
};


// getAllPorscheByYear
async function getAllPorscheByYear (year) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "year"=$1;
        `, [year]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by year!")
        console.log(error);
    }
};

// getAllPorscheByPrice
async function getAllPorscheByPrice (price) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "price"=$1;
        `, [price]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by price!")
        console.log(error);
    }
};

// getAllPorscheByMileage
async function getAllPorscheByMileage (mileage) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "mileage"=$1;
        `, [mileage]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by mileage!")
        console.log(error);
    }
};

// getAllPorscheByBodyType
async function getAllPorscheByBodyType (bodyType) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by bodyType!")
        console.log(error);
    }
};

// getAllPorscheByExteriorColor
async function getAllPorscheByExteriorColor (exteriorColor) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by exteriorColor!")
        console.log(error);
    }
};

// getAllPorscheByBodyType
async function getAllPorscheByInteriorColor (interiorColor) {
    try{
        const { rows : [porsche ] } = await client.query(`
        SELECT *
        FROM porsche
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return porsche;
    } catch (error) {
        console.log("Error getting porsche by interiorColor!")
        console.log(error);
    }
};


// createPorsche
async function createPorsche(porscheData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = porscheData;
        if (!manufacturerId) {
            throw new Error('porsche must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO porsche("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating porsche!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllPorsche,
    getAllPorscheById,
    getAllPorscheByMake,
    getAllPorscheByModel,
    getAllPorscheByYear,
    getAllPorscheByPrice,
    getAllPorscheByMileage,
    getAllPorscheByBodyType,
    getAllPorscheByExteriorColor,
    getAllPorscheByInteriorColor,
    createPorsche
}