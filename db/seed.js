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
                "imageFive" VARCHAR(500) UNIQUE,
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
                "imageFive" VARCHAR(500) UNIQUE,
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
                "imageFive" VARCHAR(500) UNIQUE,
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
            console.log("Finished creating Bentley!");
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
            console.log("Finished creating Bugatti!");
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
            console.log("Finished creating Ferrari!");
        } catch (error) {
            console.log("Error creating Ferrari!");
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

            // Bentley
            console.log("Calling all Bentley...");
            const bentley = await getAllBentley();
            console.log("Results", bentley);

                // GetByID
                console.log("Calling all BentleyId...");
                const bentleyId = await getAllBentleyById(1);
                console.log("Results", bentleyId);

                // GetByMake
                console.log("Calling all BentleyMake...");
                const bentleyMake = await getAllBentleyByMake("Bentley");
                console.log("Results", bentleyMake);

                // GetByModel
                console.log("Calling all BentleyModel...");
                const bentleyModel = await getAllBentleyByModel("Continental GT");
                console.log("Results", bentleyModel);

                // GetByYear
                console.log("Calling all BentleyYear...");
                const bentleyYear = await getAllBentleyByYear(2022);
                console.log("Results", bentleyYear);

                // GetByPrice
                console.log("Calling all BentleyPrice...");
                const bentleyPrice = await getAllBentleyByPrice(219499);
                console.log("Results", bentleyPrice);


                // GetByMileage
                console.log("Calling all BentleyMileage...");
                const bentleyMileage = await getAllBentleyByMileage(1432);
                console.log("Results", bentleyMileage);

                // GetByBodyType
                console.log("Calling all BentleyBodyType...");
                const bentleyBodyType = await getAllBentleyByBodyType("Coupe");
                console.log("Results", bentleyBodyType);

                // GetByExteriorColor
                console.log("Calling all BentleyExteriorColor...");
                const bentleyExteriorColor = await getAllBentleyByExteriorColor("White");
                console.log("Results", bentleyExteriorColor);

                // GetByInteriorColor
                console.log("Calling all BentleyInteriorColor...");
                const bentleyInteriorColor = await getAllBentleyByInteriorColor("Brown");
                console.log("Results", bentleyInteriorColor);

            // Bugatti
            console.log("Calling all Bugatti...");
            const bugatti = await getAllBugatti();
            console.log("Results", bugatti);

                // GetByID
                console.log("Calling all BugattiId...");
                const bugattiId = await getAllBugattiById(1);
                console.log("Results", bugattiId);

                // GetByMake
                console.log("Calling all BugattiMake...");
                const bugattiMake = await getAllBugattiByMake("Bugatti");
                console.log("Results", bugattiMake);

                // GetByModel
                console.log("Calling all BugattiModel...");
                const bugattiModel = await getAllBugattiByModel("Chiron");
                console.log("Results", bugattiModel);

                // GetByYear
                console.log("Calling all BugattiYear...");
                const bugattiYear = await getAllBugattiByYear(2022);
                console.log("Results", bugattiYear);

                // GetByPrice
                console.log("Calling all BugattiPrice...");
                const bugattiPrice = await getAllBugattiByPrice(2900000);
                console.log("Results", bugattiPrice);

                // GetByMileage
                console.log("Calling all BugattiMileage...");
                const bugattiMileage = await getAllBugattiByMileage(500);
                console.log("Results", bugattiMileage);

                // GetByBodyType
                console.log("Calling all BugattiBodyType...");
                const bugattiBodyType = await getAllBugattiByBodyType("Coupe");
                console.log("Results", bugattiBodyType);

                // GetByExteriorColor
                console.log("Calling all BugattiExteriorColor...");
                const bugattiExteriorColor = await getAllBugattiByExteriorColor("Blue");
                console.log("Results", bugattiExteriorColor);

                // GetByInteriorColor
                console.log("Calling all BugattiInteriorColor...");
                const bugattiInteriorColor = await getAllBugattiByInteriorColor("Black");
                console.log("Results", bugattiInteriorColor);

            // Ferrari
            console.log("Calling all Ferrari...");
            const ferrari = await getAllFerrari();
            console.log("Results", ferrari);

                // GetByID
                console.log("Calling all FerrariId...");
                const ferrariId = await getAllFerrariById(1);
                console.log("Results", ferrariId);

                // GetByMake
                console.log("Calling all FerrariMake...");
                const ferrariMake = await getAllFerrariByMake("Ferrari");
                console.log("Results", ferrariMake);

                // GetByModel
                console.log("Calling all FerrariModel...");
                const ferrariModel = await getAllFerrariByModel("458");
                console.log("Results", ferrariModel);

                // GetByYear
                console.log("Calling all FerrariYear...");
                const ferrariYear = await getAllFerrariByYear(2014);
                console.log("Results", ferrariYear);

                // GetByPrice
                console.log("Calling all FerrariPrice...");
                const ferrariPrice = await getAllFerrariByPrice(198500);
                console.log("Results", ferrariPrice);

                // GetByMileage
                console.log("Calling all FerrariMileage...");
                const ferrariMileage = await getAllFerrariByMileage(14508);
                console.log("Results", ferrariMileage);

                // GetByBodyType
                console.log("Calling all FerrariBodyType...");
                const ferrariBodyType = await getAllFerrariByBodyType("Coupe");
                console.log("Results", ferrariBodyType);

                // GetByExteriorColor
                console.log("Calling all FerrariExteriorColor...");
                const ferrariExteriorColor = await getAllFerrariByExteriorColor("Red");
                console.log("Results", ferrariExteriorColor);

                // GetByInteriorColor
                console.log("Calling all FerrariInteriorColor...");
                const ferrariInteriorColor = await getAllFerrariByInteriorColor("Black");
                console.log("Results", ferrariInteriorColor);


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