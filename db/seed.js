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

    // Method: createTables
    async function createTables() {
        try {
            console.log('Starting to build tables...');
            await client.query(`

            CREATE TABLE bentley(
                "carId" SERIAL PRIMARY KEY,
                "entreesName" VARCHAR(255) UNIQUE NOT NULL,
                instructions VARCHAR(1000) UNIQUE NOT NULL,
                "departmentId" INTEGER REFERENCES department("departmentId"),
                description TEXT NOT NULL,
                ingredients TEXT NOT NULL,
                serving_size INTEGER NOT NULL,
                time_to_prepare VARCHAR(255) UNIQUE NOT NULL,
                imageOne VARCHAR(500) UNIQUE,
                imageTwo VARCHAR(500) UNIQUE,
                imageThree VARCHAR(500) UNIQUE,
                imageFour VARCHAR(500) UNIQUE,
                imageFIve VARCHAR(500) UNIQUE,
                imageSix VARCHAR(500) UNIQUE,
                imageSeven VARCHAR(500) UNIQUE,
                imageEight VARCHAR(500) UNIQUE
            );`);   
    
            console.log('Finished building tables.');
            } catch (error) {
            console.error('Error building tables!');
            console.log(error);
            }
        }

    // Rebuild DB
    async function rebuildDB() {
        try {
            client.connect();
            console.log("Running DB function...")
            await dropTables();
            await createTables();

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