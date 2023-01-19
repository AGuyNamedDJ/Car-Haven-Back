// Requires
const { client } = require("./index") 

// Koenigsegg cardId = 2;

// getAllKoenigsegg
async function getAllKoenigsegg () {
    try{
        const { rows } = await client.query(`
        SELECT *
        FROM koenigsegg;
        `);
        return rows; 
    } catch (error) {
        console.log("Error getting koenigsegg!")
        console.log(error);
    }
};

// getAllKoenigseggById
async function getAllKoenigseggById (carId) {
    try {
        const { rows: [koenigsegg] } = await client.query (`
        SELECT *
        FROM koenigsegg
        WHERE "carId"=$1;
        `, [carId]);

        return koenigsegg;
    } catch (error){
        console.log("Error getting koenigsegg by id!")
        console.log(error);
    }
};

// getAllKoenigseggByMake
async function getAllKoenigseggByMake (make) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "make"=$1;
        `, [make]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by make!")
        console.log(error);
    }
};

// getAllKoenigseggByModel
async function getAllKoenigseggByModel (model) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "model"=$1;
        `, [model]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by model!")
        console.log(error);
    }
};


// getAllKoenigseggByYear
async function getAllKoenigseggByYear (year) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "year"=$1;
        `, [year]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by year!")
        console.log(error);
    }
};

// getAllKoenigseggByPrice
async function getAllKoenigseggByPrice (price) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "price"=$1;
        `, [price]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by price!")
        console.log(error);
    }
};

// getAllKoenigseggByMileage
async function getAllKoenigseggByMileage (mileage) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "mileage"=$1;
        `, [mileage]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by mileage!")
        console.log(error);
    }
};

// getAllKoenigseggByBodyType
async function getAllKoenigseggByBodyType (bodyType) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "bodyType"=$1;
        `, [bodyType]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by bodyType!")
        console.log(error);
    }
};

// getAllKoenigseggByExteriorColor
async function getAllKoenigseggByExteriorColor (exteriorColor) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "exteriorColor"=$1;
        `, [exteriorColor]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by exteriorColor!")
        console.log(error);
    }
};

// getAllKoenigseggByBodyType
async function getAllKoenigseggByInteriorColor (interiorColor) {
    try{
        const { rows : [koenigsegg ] } = await client.query(`
        SELECT *
        FROM koenigsegg
        WHERE "interiorColor"=$1;
        `, [interiorColor]);

        return koenigsegg;
    } catch (error) {
        console.log("Error getting koenigsegg by interiorColor!")
        console.log(error);
    }
};


// createKoenigsegg
async function createKoenigsegg(koenigseggData) {
    try {
        const { manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight } = koenigseggData;
        if (!manufacturerId) {
            throw new Error('koenigsegg must have a valid car Id')
        }
        const { rows } = await client.query(`
            INSERT INTO koenigsegg("manufacturerId", "make", model, year, price, description, mileage, "bodyType", vin, "exteriorColor", "interiorColor", doors, "imageOne", "imageTwo", "imageThree", "imageFour", "imageFive", "imageSix", "imageSeven", "imageEight")
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
            RETURNING *;
        `, [manufacturerId, make, model, year, price, description, mileage, bodyType, vin, exteriorColor, interiorColor, doors, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight]);

        return rows[0];
    } catch (error) {
        console.log("Error creating koenigsegg!")
        console.log(error);
    }
}

// Exports
module.exports = {
    getAllKoenigsegg,
    getAllKoenigseggById,
    getAllKoenigseggByMake,
    getAllKoenigseggByModel,
    getAllKoenigseggByYear,
    getAllKoenigseggByPrice,
    getAllKoenigseggByMileage,
    getAllKoenigseggByBodyType,
    getAllKoenigseggByExteriorColor,
    getAllKoenigseggByInteriorColor,
    createKoenigsegg
}