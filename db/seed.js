// Step 1: Import Client & Exports
const { create } = require('domain');
const { client } = require('./index');

// Page Imports


// Step 2: User Methods
    // Method: dropTables
    async function dropTables(){
        try {
            console.log("Dropping tables... ");
            await client.query(`
            DROP TABLE IF EXISTS bentley;
            DROP TABLE IF EXISTS bugatti;
            DROP TABLE IF EXISTS ferrari;
            DROP TABLE IF EXISTS koenigsegg;
            DROP TABLE IF EXISTS lamborghini;
            DROP TABLE IF EXISTS mclaren;
            DROP TABLE IF EXISTS porsche;
            DROP TABLE IF EXISTS rollsroyce;
            `)
        
            console.log("Finished dropping tables.")
        } catch(error){
            console.log("Error dropping tables!")
            console.log(error.detail)
        }
    }

    // Rebuild DB
    async function rebuildDB() {
        try {
        client.connect();
        console.log("Running DB function...")
        await dropTables();

        } catch (error) {
        console.log("Error during rebuildDB!")
        console.log(error.detail);
        }
    }

    // Test DB
    async function testDB() {
        try {
            console.log("Starting to test database...");

            // Test

            console.log("Finished database tests.");
        } catch (error) {
            console.log("Error during testDB!");
            console.log(error);
        }
    }

    rebuildDB()
        .then(testDB)
        .catch(console.error)
        .finally(() => client.end())