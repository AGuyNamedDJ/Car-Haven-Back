const { client } = require('./index')

// FNs
async function createManufacturer({manufacturerName}) {
    try {
        await client.query(`
        INSERT INTO manufacturer("manufacturerName")
        VALUES ($1)
        ON CONFLICT ("manufacturerName") DO NOTHING
        RETURNING *;
        `, [manufacturerName])
    } catch (error) {
        console.error(error)
    }
}
async function getAllManufacturer() {
    try {
        const { rows = [] } = await client.query(`
        SELECT *
        FROM manufacturer;
        `);
        return rows
    } catch (error) {
        console.error(error)
    }
}
async function getManufacturerById(manufacturerId) {
    try {
        const { rows } = await client.query(`
        SELECT *
        FROM manufacturer
        WHERE "manufacturerId"=$1;
        `, [manufacturerId])
        return rows
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    createManufacturer,
    getAllManufacturer,
    getManufacturerById
}