// Step 1: Import Client & Exports
const { create } = require('domain');
const { client } = require('./index');

// Page Imports
const { createManufacturer, getAllManufacturer } = require("./manufacturer");
const { createBentley, getAllBentley } = require("./bentley");


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
            DROP TABLE IF EXISTS manufacturer;
            `)
        
            console.log("Finished dropping tables.")
        } catch(error){
            console.log("Error dropping tables!")
            console.log(error.detail)
        }
    };

    // Method: createTables
    async function createTables() {
        try {
            console.log('Starting to build tables...');
            await client.query(`
            CREATE TABLE manufacturer(
                "manufacturerId" SERIAL PRIMARY KEY,
                "manufacturerName" VARCHAR(25) UNIQUE NOT NULL
            );
            CREATE TABLE bentley(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "imageFive" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE bugatti(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
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
        };

    // Create Initial Car Manufacturer
    async function createInitialManufacturer(){
        console.log("Creating a Manufacturer:...");
        try {
            await createManufacturer({
                manufacturerName: "Bentley"
            });
            console.log("Finished creating Manufacturer!")
        } catch (error) {
            console.log("Error creating manufacturer!")
            console.log(error);
        }
    };

    // Create Initial Bentley
    async function createInitialBentley(){
        console.log("Creating a Bentley:...");
        try {
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental GT",
                year: 2021,
                price: 219499,
                description: "Example of 2022 Bentley CGT",
                mileage: 1432,
                bodyType: "Coupe",
                vin: "D8EK2YF82MDUR8AJ2",
                exteriorColor: "White",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "exampleURL",
                imageTwo: "exampleURL",
                imageThree: "exampleURL",
                imageFour: "exampleURL",
                imageFive: "exampleURL",
                imageSix: "exampleURL",
                imageSeven: "exampleURL",
                imageEight: "exampleURL"
            });
            console.log("Finished creating Bentley!");
        } catch (error) {
            console.log("Error creating Bentley!");
            console.log(error);
        }
    };

    // Rebuild DB
    async function rebuildDB() {
        try {
            client.connect();
            console.log("Running DB function...")
            await dropTables();
            await createTables();
            await createInitialManufacturer();
            await createInitialBentley();

        } catch (error) {
            console.log("Error during rebuildDB!")
            console.log(error.detail);
        }
    };

    // Test DB
    async function testDB() {
        try {
            console.log("Starting to test database...");

            // Test
            console.log("Calling all Manufacturer...");
            const manufacturer = await getAllManufacturer();
            console.log("Results", manufacturer);

            console.log("Calling all Bentley...");
            const bentley = await getAllBentley();
            console.log("Results", bentley);


            console.log("Finished database tests.");
        } catch (error) {
            console.log("Error during testDB!");
            console.log(error);
        }
    };

    rebuildDB()
        .then(testDB)
        .catch(console.error)
        .finally(() => client.end())