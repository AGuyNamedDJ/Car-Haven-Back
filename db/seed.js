// Step 1: Import Client & Exports
const { create } = require('domain');
const { client } = require('./index');

// Page Imports
const { createManufacturer, getAllManufacturer } = require("./manufacturer");
const { createBentley, getAllBentley, getAllBentleyById, getAllBentleyByMake, getAllBentleyByModel, getAllBentleyByYear, getAllBentleyByPrice, getAllBentleyByMileage, getAllBentleyByBodyType, getAllBentleyByExteriorColor, getAllBentleyByInteriorColor } = require("./bentley");
const { createBugatti, getAllBugatti, getAllBugattiById, getAllBugattiByMake, getAllBugattiByModel, getAllBugattiByYear, getAllBugattiByPrice, getAllBugattiByMileage, getAllBugattiByBodyType, getAllBugattiByExteriorColor, getAllBugattiByInteriorColor } = require("./bugatti");
const { createFerrari, getAllFerrari, getAllFerrariById, getAllFerrariByMake, getAllFerrariByModel, getAllFerrariByYear, getAllFerrariByPrice, getAllFerrariByMileage, getAllFerrariByBodyType, getAllFerrariByExteriorColor, getAllFerrariByInteriorColor } = require("./ferrari");
const { createKoenigsegg, getAllKoenigsegg, getAllKoenigseggById, getAllKoenigseggByMake, getAllKoenigseggByModel, getAllKoenigseggByYear, getAllKoenigseggByPrice, getAllKoenigseggByMileage, getAllKoenigseggByBodyType, getAllKoenigseggByExteriorColor, getAllKoenigseggByInteriorColor } = require("./koenigsegg");
const { createLamborghini, getAllLamborghini, getAllLamborghiniById, getAllLamborghiniByMake, getAllLamborghiniByModel, getAllLamborghiniByYear, getAllLamborghiniByPrice, getAllLamborghiniByMileage, getAllLamborghiniByBodyType, getAllLamborghiniByExteriorColor, getAllLamborghiniByInteriorColor } = require("./lamborghini");
const { createMcLaren, getAllMcLaren, getAllMcLarenById, getAllMcLarenByMake, getAllMcLarenByModel, getAllMcLarenByYear, getAllMcLarenByPrice, getAllMcLarenByMileage, getAllMcLarenByBodyType, getAllMcLarenByExteriorColor, getAllMcLarenByInteriorColor } = require("./mclaren");
const { createPorsche, getAllPorsche, getAllPorscheById, getAllPorscheByMake, getAllPorscheByModel, getAllPorscheByYear, getAllPorscheByPrice, getAllPorscheByMileage, getAllPorscheByBodyType, getAllPorscheByExteriorColor, getAllPorscheByInteriorColor } = require("./porsche");
const { createRollsRoyce, getAllRollsRoyce, getAllRollsRoyceById, getAllRollsRoyceByMake, getAllRollsRoyceByModel, getAllRollsRoyceByYear, getAllRollsRoyceByPrice, getAllRollsRoyceByMileage, getAllRollsRoyceByBodyType, getAllRollsRoyceByExteriorColor, getAllRollsRoyceByInteriorColor } = require("./rollsroyce");


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
                "imageFive" VARCHAR(500) UNIQUE,
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
                "imageFive" VARCHAR(500) UNIQUE,
                "imageSix" VARCHAR(500) UNIQUE,
                "imageSeven" VARCHAR(500) UNIQUE,
                "imageEight" VARCHAR(500) UNIQUE
            );
            CREATE TABLE koenigsegg(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
                make VARCHAR(25) NOT NULL,
                model VARCHAR(50) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(20) NOT NULL,
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
            CREATE TABLE lamborghini(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
                make VARCHAR(25) NOT NULL,
                model VARCHAR(50) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(20) NOT NULL,
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
            CREATE TABLE mclaren(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
                make VARCHAR(25) NOT NULL,
                model VARCHAR(50) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(20) NOT NULL,
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
            CREATE TABLE porsche(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
                make VARCHAR(25) NOT NULL,
                model VARCHAR(50) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(20) NOT NULL,
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
            CREATE TABLE rollsroyce(
                "carId" SERIAL PRIMARY KEY,
                "manufacturerId" INTEGER REFERENCES manufacturer("manufacturerId"),
                make VARCHAR(25) NOT NULL,
                model VARCHAR(50) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(20) NOT NULL,
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
            await createManufacturer({
                manufacturerName: "Bugatti"
            });
            await createManufacturer({
                manufacturerName: "Ferrari"
            });
            await createManufacturer({
                manufacturerName: "Koenigsegg"
            });
            await createManufacturer({
                manufacturerName: "Lamborghini"
            });
            await createManufacturer({
                manufacturerName: "McLaren"
            });
            await createManufacturer({
                manufacturerName: "Porsche"
            });
            await createManufacturer({
                manufacturerName: "Rolls Royce"
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
                year: 2022,
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
            console.log("Finished creating Bentley.");
        } catch (error) {
            console.log("Error creating Bentley!");
            console.log(error);
        }
    };

    // Create Initial Bugatti
    async function createInitialBugatti(){
        console.log("Creating a Bugatti:...");
        try {
            await createBugatti({
                make: "Bugatti",
                manufacturerId: 2,
                model: "Chiron",
                year: 2022,
                price: 2900000,
                description: "Example of 2022 Bugatti Chiron",
                mileage: 500,
                bodyType: "Coupe",
                vin: "DFK3JF82MDUR8AJ2",
                exteriorColor: "Blue",
                interiorColor: "Black",
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
            console.log("Finished creating Bugatti.");
        } catch (error) {
            console.log("Error creating Bugatti!");
            console.log(error);
        }
    };

    // Create Initial Ferrari
    async function createInitialFerrari(){
        console.log("Creating a Bugatti:...");
        try {
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "458",
                year: 2014,
                price: 198500,
                description: "Example of 2022 Ferrari 458",
                mileage: 14508,
                bodyType: "Coupe",
                vin: "D8EK2YF82MDUR8AJ2",
                exteriorColor: "Red",
                interiorColor: "Black",
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
            console.log("Finished creating Ferrari.");
        } catch (error) {
            console.log("Error creating Ferrari!");
            console.log(error);
        }
    };

    // Create Initial Koenigsegg
    async function createInitialKoenigsegg(){
        console.log("Creating a Koenigsegg:...");
        try {
            await createKoenigsegg({
                make: "Koenigsegg",
                manufacturerId: 4,
                model: "Regera",
                year: 2016,
                price: 4170000,
                description: "Example of 2016 Koenigsegg Regera",
                mileage: 26,
                bodyType: "Coupe",
                vin: "K3N1G5E8G3R4A5",
                exteriorColor: "Orange",
                interiorColor: "Black",
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
            console.log("Finished creating Koenigsegg.");
        } catch (error) {
            console.log("Error creating Koenigsegg!");
            console.log(error);
        }
    };

    // Create Initial Lamborghini 
    async function createInitialLamborghini(){
        console.log("Creating a Lamborghini:...");
        try {
            await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Aventador SV",
            year: 2015,
            price: 548584,
            description: "Example of 2015 Lamborghini Aventador SV",
            mileage: 4655,
            bodyType: "Convertible",
            vin: "D8EK2YF82MDUR8AJ3",
            exteriorColor: "Black",
            interiorColor: "Black",
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
            console.log("Finished creating Lamborghini.");
        } catch (error) {
            console.log("Error creating Lamborghini!");
            console.log(error);
        }
    };

// Create Initial McLaren
    async function createInitialMcLaren(){
        console.log("Creating a McLaren :...");
        try {
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "Senna",
                year: 2020,
                price: 2948595,
                description: "Example of 2020 McLaren Senna",
                mileage: 343,
                bodyType: "Coupe",
                vin: "D8EK2YF82MDUR8AJ2",
                exteriorColor: "White",
                interiorColor: "Black",
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
                console.log("Finished creating McLaren.");
            } catch (error) {
                console.log("Error creating McLaren!");
                console.log(error);
        }
    };

    // Create Initial Porsche 
    async function createInitialPorsche(){
        console.log("Creating a Porsche:...");
        try {
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "918 Spyder",
                year: 2014,
                price: 2249499,
                description: "Example of 2014 Porsche 918 Spyder",
                mileage: 918,
                bodyType: "Convertible",
                vin: "D8EK2YF82MDUR8AJ3",
                exteriorColor: "Silver",
                interiorColor: "Black",
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
            console.log("Finished creating Porsche.");
        } catch (error) {
            console.log("Error creating Porsche!");
            console.log(error);
        }
    };

    // Create Initial Rolls Royce 
    async function createInitialRollsRoyce(){
        console.log("Creating a Rolls Royce:...");
        try {
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Wraith",
                year: 2017,
                price: 266489,
                description: "Example of 2017 Rolls Royce Wraith",
                mileage: 8489,
                bodyType: "Coupe",
                vin: "D8EK2YF82MDUR8AJ2",
                exteriorColor: "White",
                interiorColor: "White",
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
            console.log("Finished creating Rolls Royce.");
        } catch (error) {
            console.log("Error creating Rolls Royce!");
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
            await createInitialBugatti();
            await createInitialFerrari();
            await createInitialKoenigsegg();
            await createInitialLamborghini();
            await createInitialMcLaren();
            await createInitialPorsche();
            await createInitialRollsRoyce();

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

            // // Bentley
            // console.log("Calling all Bentley...");
            // const bentley = await getAllBentley();
            // console.log("Results", bentley);

            //     // GetByID
            //     console.log("Calling all BentleyId...");
            //     const bentleyId = await getAllBentleyById(1);
            //     console.log("Results", bentleyId);

            //     // GetByMake
            //     console.log("Calling all BentleyMake...");
            //     const bentleyMake = await getAllBentleyByMake("Bentley");
            //     console.log("Results", bentleyMake);

            //     // GetByModel
            //     console.log("Calling all BentleyModel...");
            //     const bentleyModel = await getAllBentleyByModel("Continental GT");
            //     console.log("Results", bentleyModel);

            //     // GetByYear
            //     console.log("Calling all BentleyYear...");
            //     const bentleyYear = await getAllBentleyByYear(2022);
            //     console.log("Results", bentleyYear);

            //     // GetByPrice
            //     console.log("Calling all BentleyPrice...");
            //     const bentleyPrice = await getAllBentleyByPrice(219499);
            //     console.log("Results", bentleyPrice);

            //     // GetByMileage
            //     console.log("Calling all BentleyMileage...");
            //     const bentleyMileage = await getAllBentleyByMileage(1432);
            //     console.log("Results", bentleyMileage);

            //     // GetByBodyType
            //     console.log("Calling all BentleyBodyType...");
            //     const bentleyBodyType = await getAllBentleyByBodyType("Coupe");
            //     console.log("Results", bentleyBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all BentleyExteriorColor...");
            //     const bentleyExteriorColor = await getAllBentleyByExteriorColor("White");
            //     console.log("Results", bentleyExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all BentleyInteriorColor...");
            //     const bentleyInteriorColor = await getAllBentleyByInteriorColor("Brown");
            //     console.log("Results", bentleyInteriorColor);

            // // Bugatti
            // console.log("Calling all Bugatti...");
            // const bugatti = await getAllBugatti();
            // console.log("Results", bugatti);

            //     // GetByID
            //     console.log("Calling all BugattiId...");
            //     const bugattiId = await getAllBugattiById(1);
            //     console.log("Results", bugattiId);

            //     // GetByMake
            //     console.log("Calling all BugattiMake...");
            //     const bugattiMake = await getAllBugattiByMake("Bugatti");
            //     console.log("Results", bugattiMake);

            //     // GetByModel
            //     console.log("Calling all BugattiModel...");
            //     const bugattiModel = await getAllBugattiByModel("Chiron");
            //     console.log("Results", bugattiModel);

            //     // GetByYear
            //     console.log("Calling all BugattiYear...");
            //     const bugattiYear = await getAllBugattiByYear(2022);
            //     console.log("Results", bugattiYear);

            //     // GetByPrice
            //     console.log("Calling all BugattiPrice...");
            //     const bugattiPrice = await getAllBugattiByPrice(2900000);
            //     console.log("Results", bugattiPrice);

            //     // GetByMileage
            //     console.log("Calling all BugattiMileage...");
            //     const bugattiMileage = await getAllBugattiByMileage(500);
            //     console.log("Results", bugattiMileage);

            //     // GetByBodyType
            //     console.log("Calling all BugattiBodyType...");
            //     const bugattiBodyType = await getAllBugattiByBodyType("Coupe");
            //     console.log("Results", bugattiBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all BugattiExteriorColor...");
            //     const bugattiExteriorColor = await getAllBugattiByExteriorColor("Blue");
            //     console.log("Results", bugattiExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all BugattiInteriorColor...");
            //     const bugattiInteriorColor = await getAllBugattiByInteriorColor("Black");
            //     console.log("Results", bugattiInteriorColor);

            // // Ferrari
            // console.log("Calling all Ferrari...");
            // const ferrari = await getAllFerrari();
            // console.log("Results", ferrari);

            //     // GetByID
            //     console.log("Calling all FerrariId...");
            //     const ferrariId = await getAllFerrariById(1);
            //     console.log("Results", ferrariId);

            //     // GetByMake
            //     console.log("Calling all FerrariMake...");
            //     const ferrariMake = await getAllFerrariByMake("Ferrari");
            //     console.log("Results", ferrariMake);

            //     // GetByModel
            //     console.log("Calling all FerrariModel...");
            //     const ferrariModel = await getAllFerrariByModel("458");
            //     console.log("Results", ferrariModel);

            //     // GetByYear
            //     console.log("Calling all FerrariYear...");
            //     const ferrariYear = await getAllFerrariByYear(2014);
            //     console.log("Results", ferrariYear);

            //     // GetByPrice
            //     console.log("Calling all FerrariPrice...");
            //     const ferrariPrice = await getAllFerrariByPrice(198500);
            //     console.log("Results", ferrariPrice);

            //     // GetByMileage
            //     console.log("Calling all FerrariMileage...");
            //     const ferrariMileage = await getAllFerrariByMileage(14508);
            //     console.log("Results", ferrariMileage);

            //     // GetByBodyType
            //     console.log("Calling all FerrariBodyType...");
            //     const ferrariBodyType = await getAllFerrariByBodyType("Coupe");
            //     console.log("Results", ferrariBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all FerrariExteriorColor...");
            //     const ferrariExteriorColor = await getAllFerrariByExteriorColor("Red");
            //     console.log("Results", ferrariExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all FerrariInteriorColor...");
            //     const ferrariInteriorColor = await getAllFerrariByInteriorColor("Black");
            //     console.log("Results", ferrariInteriorColor);

            // // Koenigsegg
            // console.log("Calling all Koenigsegg...");
            // const koenigsegg = await getAllKoenigsegg();
            // console.log("Results", koenigsegg);

            //     // GetByID
            //     console.log("Calling all KoenigseggId...");
            //     const koenigseggId = await getAllKoenigseggById(1);
            //     console.log("Results", koenigseggId);

            //     // GetByMake
            //     console.log("Calling all KoenigseggMake...");
            //     const koenigseggMake = await getAllKoenigseggByMake("Koenigsegg");
            //     console.log("Results", koenigseggMake);

            //     // GetByModel
            //     console.log("Calling all KoenigseggModel...");
            //     const koenigseggModel = await getAllKoenigseggByModel("Regera");
            //     console.log("Results", koenigseggModel);

            //     // GetByYear
            //     console.log("Calling all KoenigseggYear...");
            //     const koenigseggYear = await getAllKoenigseggByYear(2016);
            //     console.log("Results", koenigseggYear);

            //     // GetByPrice
            //     console.log("Calling all KoenigseggPrice...");
            //     const koenigseggPrice = await getAllKoenigseggByPrice(4170000);
            //     console.log("Results", koenigseggPrice);

            //     // GetByMileage
            //     console.log("Calling all KoenigseggMileage...");
            //     const koenigseggMileage = await getAllKoenigseggByMileage(26);
            //     console.log("Results", koenigseggMileage);

            //     // GetByBodyType
            //     console.log("Calling all KoenigseggBodyType...");
            //     const koenigseggBodyType = await getAllKoenigseggByBodyType("Coupe");
            //     console.log("Results", koenigseggBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all KoenigseggExteriorColor...");
            //     const koenigseggExteriorColor = await getAllKoenigseggByExteriorColor("Orange");
            //     console.log("Results", koenigseggExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all KoenigseggInteriorColor...");
            //     const koenigseggInteriorColor = await getAllKoenigseggByInteriorColor("Black");
            //     console.log("Results", koenigseggInteriorColor);

            // // Lamborghini
            // console.log("Calling all Lamborghini...");
            // const lamborghini = await getAllLamborghini();
            // console.log("Results", lamborghini);

            //     // GetByID
            //     console.log("Calling all LamborghiniId...");
            //     const lamborghiniId = await getAllLamborghiniById(1);
            //     console.log("Results", lamborghiniId);

            //     // GetByMake
            //     console.log("Calling all LamborghiniMake...");
            //     const lamborghiniMake = await getAllLamborghiniByMake("Lamborghini");
            //     console.log("Results", lamborghiniMake);

            //     // GetByModel
            //     console.log("Calling all LamborghiniModel...");
            //     const lamborghiniModel = await getAllLamborghiniByModel("Aventador SV");
            //     console.log("Results", lamborghiniModel);

            //     // GetByYear
            //     console.log("Calling all LamborghiniYear...");
            //     const lamborghiniYear = await getAllLamborghiniByYear(2015);
            //     console.log("Results", lamborghiniYear);

            //     // GetByPrice
            //     console.log("Calling all LamborghiniPrice...");
            //     const lamborghiniPrice = await getAllLamborghiniByPrice(548584);
            //     console.log("Results", lamborghiniPrice);

            //     // GetByMileage
            //     console.log("Calling all LamborghiniMileage...");
            //     const lamborghiniMileage = await getAllLamborghiniByMileage(4655);
            //     console.log("Results", lamborghiniMileage);

            //     // GetByBodyType
            //     console.log("Calling all LamborghiniBodyType...");
            //     const lamborghiniBodyType = await getAllLamborghiniByBodyType("Convertible");
            //     console.log("Results", lamborghiniBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all LamborghiniExteriorColor...");
            //     const lamborghiniExteriorColor = await getAllLamborghiniByExteriorColor("Black");
            //     console.log("Results", lamborghiniExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all LamborghiniInteriorColor...");
            //     const lamborghiniInteriorColor = await getAllLamborghiniByInteriorColor("Black");
            //     console.log("Results", lamborghiniInteriorColor);

            // // McLaren
            // console.log("Calling all McLaren...");
            // const mclaren = await getAllMcLaren();
            // console.log("Results", mclaren);

            //     // GetByID
            //     console.log("Calling all McLarenId...");
            //     const mclarenId = await getAllMcLarenById(1);
            //     console.log("Results", mclarenId);

            //     // GetByMake
            //     console.log("Calling all McLarenMake...");
            //     const mclarenMake = await getAllMcLarenByMake("McLaren");
            //     console.log("Results", mclarenMake);

            //     // GetByModel
            //     console.log("Calling all McLarenModel...");
            //     const mcLarenModel = await getAllMcLarenByModel("Senna");
            //     console.log("Results", mcLarenModel);

            //     // GetByYear
            //     console.log("Calling all McLarenYear...");
            //     const mcLarenYear = await getAllMcLarenByYear(2020);
            //     console.log("Results", mcLarenYear);

            //     // GetByPrice
            //     console.log("Calling all McLarenPrice...");
            //     const mcLarenPrice = await getAllMcLarenByPrice(2948595);
            //     console.log("Results", mcLarenPrice);

            //     // GetByMileage
            //     console.log("Calling all McLarenMileage...");
            //     const mcLarenMileage = await getAllMcLarenByMileage(343);
            //     console.log("Results", mcLarenMileage);

            //     // GetByBodyType
            //     console.log("Calling all McLarenBodyType...");
            //     const mcLarenBodyType = await getAllMcLarenByBodyType("Coupe");
            //     console.log("Results", mcLarenBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all McLarenExteriorColor...");
            //     const mcLarenExteriorColor = await getAllMcLarenByExteriorColor("White");
            //     console.log("Results", mcLarenExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all McLarenInteriorColor...");
            //     const mcLarenInteriorColor = await getAllMcLarenByInteriorColor("Black");
            //     console.log("Results", mcLarenInteriorColor);

            // // Porsche
            // console.log("Calling all Porsche...");
            // const porsche = await getAllPorsche();
            // console.log("Results", porsche);

            //     // GetByID
            //     console.log("Calling all PorscheId...");
            //     const porscheId = await getAllPorscheById(1);
            //     console.log("Results", porscheId);

            //     // GetByMake
            //     console.log("Calling all PorscheMake...");
            //     const porscheMake = await getAllPorscheByMake("Porsche");
            //     console.log("Results", porscheMake);

            //     // GetByModel
            //     console.log("Calling all PorscheModel...");
            //     const porscheModel = await getAllPorscheByModel("918 Spyder");
            //     console.log("Results", porscheModel);

            //     // GetByYear
            //     console.log("Calling all PorscheYear...");
            //     const porscheYear = await getAllPorscheByYear(2014);
            //     console.log("Results", porscheYear);

            //     // GetByPrice
            //     console.log("Calling all PorschePrice...");
            //     const porschePrice = await getAllPorscheByPrice(2249499);
            //     console.log("Results", porschePrice);

            //     // GetByMileage
            //     console.log("Calling all PorscheMileage...");
            //     const porscheMileage = await getAllPorscheByMileage(918);
            //     console.log("Results", porscheMileage);

            //     // GetByBodyType
            //     console.log("Calling all PorscheBodyType...");
            //     const porscheBodyType = await getAllPorscheByBodyType("Convertible");
            //     console.log("Results", porscheBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all PorscheExteriorColor...");
            //     const porscheExteriorColor = await getAllPorscheByExteriorColor("Silver");
            //     console.log("Results", porscheExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all PorscheInteriorColor...");
            //     const porscheInteriorColor = await getAllPorscheByInteriorColor("Black");
            //     console.log("Results", porscheInteriorColor);

            // // RollsRoyce
            // console.log("Calling all RollsRoyce...");
            // const rollsRoyce = await getAllRollsRoyce();
            // console.log("Results", rollsRoyce);

            //     // GetByID
            //     console.log("Calling all RollsRoyceId...");
            //     const rollsRoyceId = await getAllRollsRoyceById(1);
            //     console.log("Results", rollsRoyceId);

            //     // GetByMake
            //     console.log("Calling all RollsRoyceMake...");
            //     const rollsRoyceMake = await getAllRollsRoyceByMake("Rolls Royce");
            //     console.log("Results", rollsRoyceMake);

            //     // GetByModel
            //     console.log("Calling all RollsRoyceModel...");
            //     const rollsRoyceModel = await getAllRollsRoyceByModel("Wraith");
            //     console.log("Results", rollsRoyceModel);

            //     // GetByYear
            //     console.log("Calling all RollsRoyceYear...");
            //     const rollsRoyceYear = await getAllRollsRoyceByYear(2017);
            //     console.log("Results", rollsRoyceYear);

            //     // GetByPrice
            //     console.log("Calling all RollsRoycePrice...");
            //     const rollsRoycePrice = await getAllRollsRoyceByPrice(266489);
            //     console.log("Results", rollsRoycePrice);

            //     // GetByMileage
            //     console.log("Calling all RollsRoyceMileage...");
            //     const rollsRoyceMileage = await getAllRollsRoyceByMileage(8489);
            //     console.log("Results", rollsRoyceMileage);

            //     // GetByBodyType
            //     console.log("Calling all RollsRoyceBodyType...");
            //     const rollsRoyceBodyType = await getAllRollsRoyceByBodyType("Coupe");
            //     console.log("Results", rollsRoyceBodyType);

            //     // GetByExteriorColor
            //     console.log("Calling all RollsRoyceExteriorColor...");
            //     const rollsRoyceExteriorColor = await getAllRollsRoyceByExteriorColor("White");
            //     console.log("Results", rollsRoyceExteriorColor);

            //     // GetByInteriorColor
            //     console.log("Calling all RollsRoyceInteriorColor...");
            //     const rollsRoyceInteriorColor = await getAllRollsRoyceByInteriorColor("White");
            //     console.log("Results", rollsRoyceInteriorColor);

            // Test
            console.log("Calling all Manufacturer...");
            // const manufacturer = await getAllManufacturer();
            console.log("Results", manufacturer);

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