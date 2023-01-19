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
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE bugatti(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE ferrari(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE koenigsegg(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE lamborghini(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE mclaren(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE porsche(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE rollsroyce(
                "carId" SERIAL PRIMARY KEY,
                make VARCHAR(25) NOT NULL,
                model VARCHAR(25) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(10) NOT NULL,
                vin VARCHAR(50) UNIQUE NOT NULL,
                "exteriorColor" VARCHAR(50) NOT NULL,
                "interiorColor" VARCHAR(50) NOT NULL,
                doors INTEGER,
                "imageOne" VARCHAR(500) UNIQUE,
                "imageTwo" VARCHAR(500) UNIQUE,
                "imageThree" VARCHAR(500) UNIQUE,
                "imageFour" VARCHAR(500) UNIQUE,
                "imageFIve" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
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