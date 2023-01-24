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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                model VARCHAR(65) NOT NULL,
                year INTEGER NOT NULL,
                price NUMERIC(8,0) NOT NULL,
                description TEXT NOT NULL,
                mileage NUMERIC(6,0),
                "bodyType" VARCHAR(15) NOT NULL,
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
                year: 2019,
                price: 312704,
                description: "The Bentley Continental GT is a luxury grand tourer that boasts a sleek and sporty design. The CGT features a powerful W12 engine that delivers smooth and effortless acceleration. The interior is crafted with the finest materials, including leather seats and wood veneers. The car is equipped with advanced technology such as a touch-screen infotainment system, and a driver assistance package. With a combination of performance and luxury, the Bentley Continental GT is the perfect car for those who demand the best of both worlds. This particular dealership is offering this beautiful car with low mileage and in excellent condition. With its timeless design, the Bentley Continental GT is sure to turn heads and provide an unforgettable driving experience.",
                mileage: 1432,
                bodyType: "Coupe",
                vin: "D8EK2YF82MDUR8AJ2",
                exteriorColor: "Grey",
                interiorColor: "White",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/305c4bd6-ac58-4462-bc3b-e10970f423a2/je/1900xxs.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/590a40ff-0ad5-4ae7-af52-08c3b098b50d/je/1900xxs.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/b8dacca7-6a93-4d10-a23a-cdbe4298b6ec/je/1900xxs.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/6bdce530-5ef5-4384-9635-609f54554b14/je/1900xxs.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/94d3c498-4dc4-436d-bfaf-20065bb6a50d/je/1900xxs.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/6d053fc5-e5d8-4802-911d-6d85a9ea42fd/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/6d053fc5-e5d8-4802-911d-6d85a9ea42fd/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2019/10/18/07/59/35/6dbbb59c-c5f0-45d8-a06c-5e5569f382eb/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental Flying Spur",
                year: 2014,
                price: 89572,
                description: "The Bentley Continental Flying Spur is a luxury sedan that boasts both style and power. Its sleek, sporty exterior is accented by the iconic Bentley grille and LED headlights. Inside, the cabin is lined with fine leather and wood accents, providing a sophisticated and comfortable ride. Under the hood, the Continental Flying Spur is powered by a massive 6.0L W12 engine, capable of producing 626 horsepower and 605 lb-ft of torque. This engine is paired with an 8-speed automatic transmission, allowing for smooth and effortless acceleration. The Continental Flying Spur also features all-wheel drive, providing excellent handling and stability on the road. In addition, it offers a range of advanced technologies, including a state-of-the-art infotainment system, advanced safety features, and a comfortable and spacious interior. With its impressive performance and opulent features, the Bentley Continental Flying Spur is the ultimate luxury driving experience.",
                mileage: 13222,
                bodyType: "Sedan",
                vin: "DKGJ30SKGH5KWKFFH",
                exteriorColor: "Blue",
                interiorColor: "Brown",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2020/01/31/23/43/47/646a21d9-2586-452e-a0f1-5f3c63084c03/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2020/01/31/23/43/47/22ec7e5c-1ac1-4c26-82b0-527920245642/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2020/02/01/00/14/42/291c04ce-b796-4e32-ad5a-0ce25ec2cd35/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2020/01/31/23/43/47/9d7a9e73-6942-4780-844a-906c0b0460ed/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2020/01/31/23/43/47/42b54695-affb-4bc3-bb4a-88c71e231eca/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2020/02/01/00/14/42/948ac93a-0535-4277-8bcc-62db7880eb3c/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2020/01/31/23/43/48/7abacc46-da3b-4946-989a-4f2707f9e7d3/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2020/02/01/00/14/42/a30fad50-0924-41b3-a255-731e32956baa/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Bentley Bentayga V8",
                year: 2019,
                price: 183496,
                description: "Introducing the sleek and powerful Bentley Bentayga. This luxury SUV boasts a sophisticated and sporty design, with a striking grille and sleek lines that exude elegance and class. Under the hood, the Bentayga is powered by a 6.0L W12 engine that delivers an impressive 600 horsepower, allowing for a smooth and exhilarating ride. The interior is just as impressive, with handcrafted leather seats, advanced technology, and a spacious cabin that exudes luxury and comfort. With its iconic Bentley design, advanced engineering, and unrivaled performance, the Bentayga is the ultimate driving experience. Don't miss your chance to own this ultimate luxury SUV, come test drive it at our dealership today.",
                mileage: 3555,
                bodyType: "SUV",
                vin: "LFJSKR83JD775",
                exteriorColor: "Green",
                interiorColor: "Orange",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2019/06/20/07/51/20/121f282f-1e7c-47ee-9119-df5bfb6231a5/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/45/021e6f22-39f2-490a-8e14-3bde9a933217/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/47/00c09c5c-7a66-4831-b2db-146d8a0e483b/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/46/f2cf0277-6ac8-4c00-ab83-f08424a06938/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/47/a0a30344-4fc7-4380-b411-3de0ac4e6b41/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/46/74c15eec-2588-4548-8192-37b5b5c6d888/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/47/e6f19829-5463-4006-aa77-6565c284970f/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2019/06/12/14/11/47/6db57688-c346-4bd3-8bf5-7ab410286bd3/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental GT",
                year: 2020,
                price: 247449,
                description: "Example of 2022 Bentley CGT",
                mileage: 458,
                bodyType: "Coupe",
                vin: "FLS9FJ3K3JSKDFS",
                exteriorColor: "Green",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/d2b6503e-50cb-40d6-a8a4-04c0241c769e/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/b2a1701d-26df-4c86-9cff-c5dc0cd3b7af/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/0d19440a-08d5-4b8d-b309-6f0bb9219fa9/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/acb94315-22da-4785-99f1-408570cc1098/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/ab976b3f-76b4-4fd7-891e-ceb2b4127394/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/0efe4f6f-777a-4b85-b038-7f0549d888ea/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/b88150b4-8961-4a69-991e-642bc16bd23a/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2021/09/23/15/28/12/bb033e7b-8585-4c82-b7dd-b9db4282fb6f/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental",
                year: 2020,
                price: 243156,
                description: "The 2020 Bentley Continental is a luxurious and powerful grand tourer. The exterior boasts sleek lines, a bold front grille, and 21-inch alloy wheels, while the interior is a masterclass in craftsmanship, featuring the finest leathers and woods. The Continental is powered by a 6.0L W12 engine, producing 626 horsepower and 664 lb-ft of torque, allowing for a top speed of 207 mph and a 0-60 time of just 3.5 seconds. With advanced technology features, such as a touchscreen infotainment system and a 12-speaker sound system, and a smooth, comfortable ride, the Continental is the epitome of class and performance. Experience the ultimate in luxury and power with the 2020 Bentley Continental.",
                mileage: 36,
                bodyType: "Coupe",
                vin: "FLSKDI38EJ27SHDJ",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/6529dce0-846b-40b0-abaa-489acce6de06/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/9f2ef60b-1760-4eaf-9da5-45bdf0bf8a41/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/49ca9e99-291a-4d21-8d4c-7e205ad44b07/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/25350cc8-fad6-4379-81e8-fec210206391/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/14479424-422f-417f-9252-861827fc3941/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/4ca7a32a-cbb1-4fe2-8ea3-5b75cf486af2/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/beda0bd2-dea7-4932-9e34-cb6f51017ded/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2020/12/31/14/13/01/1b64bf4b-e17e-4e46-8f23-f79767dcff0a/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Bentayga",
                year: 2021,
                price: 657948,
                description: "The 2021 Bentley Bentayga Mansory Edition is a luxurious and powerful SUV that exudes luxury and performance. This limited edition model features a sleek and aerodynamic exterior design, with a bespoke body kit and 22-inch alloy wheels. Inside, the cabin is decked out in the finest leather and wood finishes, with a host of advanced technology and infotainment features. Under the hood, the Bentayga Mansory Edition is powered by a 6.0-liter W12 engine that delivers an impressive 600 horsepower, allowing for a top speed of 187 mph. With its unique style and exceptional performance, this is a truly exclusive vehicle for the discerning driver.",
                mileage: 643,
                bodyType: "SUV",
                vin: "JANFJW73NS92NF",
                exteriorColor: "Black",
                interiorColor: "Blue",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/18/6a4055d9-b4e9-4507-b3d4-2bd0f06a0b89/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/17/85e44589-7ee3-4a16-8f57-01462900fa07/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/17/d80fa6fe-8b8e-4029-a53d-edd7a4514959/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/17/bdecc7ac-6a95-4d56-994c-42f7c25199d2/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/17/936566e5-4114-4a2a-8582-e1341c15f973/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/17/936566e5-4114-4a2a-8582-e1341c15f973/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/17/936566e5-4114-4a2a-8582-e1341c15f973/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/03/18/13/06/18/4626ce69-2bd4-420d-8c0b-d4c0f2a3f584/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Bentayga V8",
                year: 2021,
                price: 194900,
                description: "The Bentley Bentayga V8 is a luxury SUV that exudes power and elegance. With a 4.0L V8 engine under the hood, this vehicle is capable of producing a staggering 542 horsepower and 568 lb-ft of torque. The Bentayga V8 also features a sport-tuned suspension for a more dynamic driving experience. The exterior of the Bentayga V8 is characterized by its sleek lines and bold design, while the interior is crafted with the finest leathers and woods, creating a truly opulent atmosphere. The Bentayga V8 also comes loaded with state-of-the-art technology and advanced safety features, making it a top choice for those who demand the very best in luxury and performance.",
                mileage: 16001,
                bodyType: "SUV",
                vin: "DM5KS9ND73FU8H",
                exteriorColor: "White",
                interiorColor: "Brown",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/255d2481-0502-4944-b1b7-6d1f510d7169/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/eaf8738a-735e-4982-9fd9-997450731096/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/8337195d-1c35-45e9-9db4-fe6d9471959d/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/1181f71a-26e2-492a-b4f7-7fff51f55cd8/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/dd7c01d1-b35c-42a7-a9a0-611b67c92031/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/21f19670-153e-4daf-beb7-82bc72b86cd3/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/e1556b04-b0b7-45e5-b0c7-288f09b6c888/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/884b0129-73a0-45e6-818c-09c5e3020cac/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental GT",
                year: 2019,
                price: 251837,
                description: "The Bentley Continental GTC is a luxury convertible that exudes opulence and class. The sleek and powerful exterior is matched by the sumptuous interior, featuring the finest leather upholstery and wood finishes. The V8 engine provides a smooth and exhilarating driving experience, while the advanced technology and infotainment systems ensure that every journey is a pleasure. The Continental GTC is the perfect car for those who demand the best in luxury and performance.",
                mileage: 24123,
                bodyType: "Convertible",
                vin: "JFSJ39GJDH36S",
                exteriorColor: "White",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/52/ae2a26ba-2285-460a-bf29-159d0f3c1ad6/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/52/ef4120ab-bc57-442c-b4e7-f63a4440197e/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/52/f7c8fdd2-a687-4af5-b69d-40eb9dc3f80e/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/52/29ee4f29-0a42-4340-82e9-e20c4f41d726/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/54/b0210b98-a3f3-43b3-904a-7ee96799f83e/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/54/5f28e281-f91e-4eb3-b423-156d17346d4d/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/52/e26a3773-ae13-490f-bc64-ee904f2d88b0/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/01/05/11/26/52/f964c8ff-becd-49ff-b72a-2f37d92a4605/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental GT3R 4x4",
                year: 2015,
                price: 214659,
                description: "Introducing the powerful and sleek 2015 Bentley Continental GT3-R. This limited edition vehicle is built for speed and performance, featuring a 4.0L V8 engine that delivers 572 horsepower and 516 lb-ft of torque. The GT3-R is a track-inspired version of the Continental GT, with a sport-tuned suspension, carbon fiber exterior accents, and exclusive two-tone paint finish. Inside, the cabin is outfitted with diamond-quilted leather seats, a sport steering wheel, and a unique GT3-R badge on the center console. With only 300 units produced worldwide, this is a rare opportunity to own a piece of Bentley's motorsport heritage.",
                mileage: 1375,
                bodyType: "Coupe",
                vin: "FJSL4I8DJ5IF",
                exteriorColor: "White",
                interiorColor: "Red ",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/5d0f2a42-77e2-4d01-8f80-d6b6ffef6ae2/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/c52df0db-906f-4c4c-aa54-d01b8a1dca07/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/5cb42eaa-064a-4289-b02b-7aae6abf45e6/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/a299ccf9-0bc4-4b3b-81ed-4d2f2d5b970b/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/8f73f5b0-ebb6-4819-8135-d6b44d3a3ed5/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/c2ce6c7d-6c03-47c9-8073-1281e5e43652/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/4e29525f-9db1-41dc-ad3a-ed3d3b8563fc/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2021/11/22/16/19/16/04fa04b6-7420-43d5-9f23-ef179db54808/je/768xxsxm.jpg"
            });
            await createBentley({
                make: "Bentley",
                manufacturerId: 1,
                model: "Continental GT Speed",
                year: 2022,
                price: 279468,
                description: "The Bentley Continental GT Speed is the ultimate luxury sports car, offering unmatched power and performance. This stunning vehicle features a massive 6.0L W12 engine that delivers incredible speed and agility, with a top speed of 205 mph. The sleek and aerodynamic body is crafted from lightweight aluminum, giving the GT Speed a nimble and responsive feel on the road. The interior is a masterclass in luxury and comfort, with sumptuous leather seats, a state-of-the-art infotainment system, and a host of advanced driver assistance features. With its dynamic handling and refined styling, the Bentley Continental GT Speed is the perfect choice for drivers who demand the very best in performance and luxury.",
                mileage: 1432,
                bodyType: "Coupe",
                vin: "GLS94D5TFYGRFS",
                exteriorColor: "Green",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/a81b6998-d6c8-4d56-b6aa-b81596f75b4d/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/f6c65ca8-d503-4c56-b2a4-0da07f20ee02/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/a438aa7a-be24-45c7-8e80-e0cc9cc48722/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/f90a2bc6-9ddc-4091-859f-7e20af7eba2d/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/88f776a3-1c57-4b05-8458-54c96849ebc2/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/e6f353c5-8917-47c1-834f-35482e9e0f4f/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/2bdc12fb-721d-4585-8432-f1b16e3868a4/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/08/11/15/59/55/ffd62fb8-1991-46c2-94fc-b4d2b3563ad2/je/768xxsxm.jpg"
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
                year: 2018,
                price: 3650000,
                description: "The Bugatti Chiron is a luxury sports car that boasts unmatched power and performance. With a quad-turbocharged 8.0-liter W16 engine, the Chiron is capable of reaching top speeds of 261 mph and accelerating from 0-60 in just 2.4 seconds. The exterior of the Chiron is sleek and aerodynamic, with a low-slung profile and sharp lines that exude a sense of speed and power. Inside, the cabin is outfitted with the finest materials, including leather seats and a dashboard that is adorned with carbon fiber and aluminum accents. The Chiron also comes equipped with the latest in technology and driver-assist features, making it one of the most advanced and capable sports cars on the market.",
                mileage: 6,
                bodyType: "Coupe",
                vin: "R4THYERTY4RTY",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/e603b0b3-1a86-4e4c-9dc4-db542b88eb89/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/25/7f7570c1-ca12-4240-be87-35d2e12a416c/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/6c7b6fbe-d176-45f5-b3f6-2eeb9523b008/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/25/59737102-4b40-4034-9061-0e54613e3487/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/e7cbbc80-a59e-426a-a5b7-2b78ca90e6ab/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/d2965c8c-5e01-4f13-a57e-b41aa9ada01d/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/11/16/17/16/20/9e36713f-0951-4102-8d39-a46f4e41d0dd/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/11/16/17/16/17/e3f12b5f-280a-4d50-b8d4-ce2db5edc637/je/768xxsxm.jpg"
                });
            await createBugatti({
                make: "Bugatti",
                manufacturerId: 2,
                model: "Chiron 110 ans",
                year: 2019,
                price: 4376897,
                description: "The Bugatti Chiron 110 ans edition is a limited-edition supercar that celebrates the 110th anniversary of the Bugatti brand. It features a unique black and yellow color scheme inspired by the brand's historical Type 18 'Black Bess' model. The car is powered by an 8.0-liter W16 engine that produces an astonishing 1,500 horsepower and 1,180 lb-ft of torque, allowing it to reach a top speed of 261 mph. The Chiron 110 ans edition also boasts a bespoke interior with carbon fiber accents and premium leather upholstery. With only 20 units produced, the Chiron 110 ans is a highly exclusive and coveted model among Bugatti enthusiasts and collectors.",
                mileage: 800,
                bodyType: "Coupe",
                vin: "RT6Y7UFGTY67",
                exteriorColor: "Black",
                interiorColor: "Blue",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/53/b05d81df-b6fb-4948-a6e3-61da01c165d5/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/59/e8a1d53e-cb57-4589-a0dd-a0880f2f7819/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/53/0902680f-b18f-478f-af2c-e5f67c4d085c/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/53/c3cefa01-4881-41eb-af99-da8dc4785251/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/59/9211d9b3-6b4c-4b9b-a41a-2ec56df414df/je/768xxsxm.jpgURL",
                imageSix: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/53/37ee601f-41d3-4af8-ac2f-848ae2252d63/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/53/044cae47-2c59-4b57-8be9-6cf092745fdb/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/11/04/15/37/53/77a1ed67-dc49-4e19-91e8-3495df48dc54/je/768xxsxm.jpg"
                });
            await createBugatti({
                make: "Bugatti",
                manufacturerId: 2,
                model: "Veyron",
                year: 2011,
                price: 1633537,
                description: "The Bugatti Veyron is an iconic supercar that exudes luxury and performance. With a 8.0-liter W16 engine producing 1,001 horsepower and 922 lb-ft of torque, this car can reach top speeds of up to 253 mph. The Veyron's sleek aerodynamic design is accentuated by its unique horseshoe-shaped grille, LED lights, and curved body lines. The interior is equally impressive, featuring a combination of leather, carbon fiber, and aluminum for a truly opulent experience. The car also comes with a advanced infotainment system and a comfortable seating for 2. With only 450 units ever produced, owning a Veyron is a rare privilege reserved for the most discerning car enthusiasts.",
                mileage: 5449,
                bodyType: "Coupe",
                vin: "YUI8GTYUFRTOI",
                exteriorColor: "Black",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/71ca662d-51e9-4ee5-84c3-35915754b693/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/c91070fd-ccc5-4447-951b-7f397afba95e/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/2b6de2c2-ecf9-4519-8c09-bdcac563caa6/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/5eeefb9f-d18b-4696-91f5-ae375454df6e/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/400f5b6c-cc7e-4e8c-8e02-fa41ed59c289/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/07/18/09/50/59/8c639ae5-776d-46fa-aff4-03d2f0a6108c/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/bd7001ce-556a-42ec-86d0-29f9f0c88922/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/07/18/09/51/00/9fd10175-4293-4a9d-a36a-7d445ac1e0c0/je/768xxsxm.jpg"
                });
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
            await createBugatti({
                make: "Bugatti",
                manufacturerId: 2,
                model: "Divo",
                year: 2022,
                price: 8437649,
                description: "The Bugatti Divo is a limited-edition supercar that is truly a work of art. With its sleek and aerodynamic design, the Divo exudes power and performance. Built on the same platform as the Bugatti Chiron, the Divo is equipped with an 8.0-liter W16 engine that produces 1,500 horsepower and 1,180 lb-ft of torque. This allows the Divo to reach 60 mph in just 2.4 seconds and reach a top speed of 261 mph. The car also features advanced aerodynamics, including active front and rear wing elements, to provide optimal downforce and handling. The interior is equally impressive, with premium leather seats, a state-of-the-art infotainment system, and a host of driver assistance technologies. Only 40 units of the Divo were produced, making it a true collector's item for Bugatti enthusiasts.",
                mileage: 489,
                bodyType: "Coupe",
                vin: "EDR56T7YHXRET7",
                exteriorColor: "Grey",
                interiorColor: "Blue",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/17/fb8c3d98-1b2c-4ae2-a1a4-377cf9a1aee2/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/14/43326cdc-1d40-418a-b3b2-5d0fa9823849/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/23/5be1db8f-0e16-4537-88ee-d1fdf5c8b48f/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/23/5be1db8f-0e16-4537-88ee-d1fdf5c8b48f/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/23/ab542922-1151-49da-a438-c1612a4820a8/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/23/ea25d03f-2c12-4d59-b0ae-8e5b04c8a693/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/14/8ca55ca5-c2d8-4a3d-8c71-6840dba84323/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/02/16/15/26/14/8f4a9dcf-c2b6-4d68-8a26-761af12be1c0/je/768xxsxm.jpg"
                });
            console.log("Finished creating Bugatti.");
        } catch (error) {
            console.log("Error creating Bugatti!");
            console.log(error);
        }
    };

    // Create Initial Ferrari
    async function createInitialFerrari(){
        console.log("Creating a Ferrari:...");
        try {
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "Roma",
                year: 2022,
                price: 299900,
                description: "The Ferrari Roma is a sleek and stylish grand tourer that exudes power and luxury. With a 3.9-liter V8 engine under the hood, this car is capable of reaching top speeds of up to 199 mph. The Roma's aerodynamic design is not only visually striking, but also improves performance and handling. Inside, the car is outfitted with the latest in Ferrari technology, including a large touchscreen display and advanced safety features. The cabin is also tailored for comfort, with premium leather seats and a host of customizable options. Whether you're cruising down the open road or pushing the limits on the track, the Ferrari Roma is sure to turn heads and leave a lasting impression.",
                mileage: 1000,
                bodyType: "Coupe",
                vin: "OLJUHYT9LO8IK",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/06502427-8f97-44b0-9f73-39a44f215ef6/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/1cd61ac2-dad5-4b9d-8013-2a49b88d2435/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/a8f89c9a-eb86-4d4d-b339-3c616f3b0db9/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/9366d900-642a-4ae3-b80f-a92e5b57ac65/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/85af94c4-3735-434d-80b2-5d2b13c68dd8/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/a4740b7a-cd42-4464-97b8-fd96af8d4dd9/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/1b09df74-61e0-49fd-95d2-dc3319cc6d02/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/03478fb8-7f72-4ed2-89a1-89421248c580/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "488",
                year: 2020,
                price: 420388,
                description: "The Ferrari 488 is a high-performance sports car that is sure to turn heads on the road. The sleek and aerodynamic design is complemented by a powerful V8 engine that produces a staggering 661 horsepower and 560 lb-ft of torque. The car is capable of reaching top speeds of over 205 mph and can accelerate from 0-60 mph in just 3 seconds. The interior is just as impressive, with leather seats, a state-of-the-art infotainment system, and a host of advanced safety features. The 488 is a true masterpiece of engineering and design, and a must-have for any car enthusiast.",
                mileage: 3125,
                bodyType: "Coupe",
                vin: "FTYGVY5R6TFYYT",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/01/8fd83e24-0bfc-4562-8285-f62a0bd74097/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/05/e9511ae2-93a1-45ea-9f3e-b21b730c47ca/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/09/93afff6f-62b7-43a4-9a0b-49c9d9a67585/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/00/9f300344-2948-4c3c-8542-d21e3156f5a5/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/09/7751504f-5486-4138-8fb1-f03bf74cee91/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/00/1111f0ea-3896-45ad-8f97-0c7648cf401c/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/09/318988eb-76dc-45ca-9930-6c4bf3d63aad/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/23/14/51/05/adbe7b53-4849-41d1-ac28-3a8afb2cba69/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "SF90 Stradale",
                year: 2022,
                price: 789900,
                description: "The Ferrari SF90 Stradale is the ultimate expression of Ferrari's hybrid technology. With a powerful V8 engine and three electric motors, the SF90 Stradale delivers staggering performance, with a top speed of over 340 km/h and a 0-100 km/h acceleration time of just 2.5 seconds. The car's advanced aerodynamics and advanced materials, including a full carbon-fibre monocoque, ensure optimal weight distribution and handling. The SF90 Stradale also features Ferrari's latest infotainment and driver assistance systems, including a 16-inch curved HD touchscreen display and advanced navigation. With its sleek, futuristic design and cutting-edge technology, the SF90 Stradale is a true masterpiece of engineering.",
                mileage: 95,
                bodyType: "Coupe",
                vin: "IJU8H77GYB8HU",
                exteriorColor: "Blue",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/826f8af0-516c-4a0d-a898-22ec36e4db2e/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/2bc2a088-22e5-4537-bbfe-b817ada61be6/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/0c7f9d87-78bd-4274-b759-45f2673be856/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/ea3b4f72-36f7-4658-82bb-accc11bb1c29/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/aa2c95cf-84c3-45d1-800d-b5ce72543de4/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/f736f7b8-1400-4593-b984-a03b9849e669/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/593f870d-2031-421a-96a2-12dfe817e178/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/19/16/31/59/c61a21bc-4b26-45c3-9738-abd772f5e58b/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "488 Pista Piloti",
                year: 2021,
                price: 549484,
                description: "Example of 2022 Ferrari 458",
                mileage: 100,
                bodyType: "Coupe",
                vin: "K3J4NHGF6D7",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/17/119ab299-7db1-4e64-b952-309951074df5/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/17/8d056eab-9c62-401b-9afa-8b7299fa2dc1/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/18/5ffdbee2-0bdc-4145-9c95-661c04aeb8a5/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/17/236fad64-18a9-40cc-a202-80db2da2e137/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/17/f714d7e3-a3cc-4037-b07e-fa9e9b4939cd/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/17/c3867318-d484-463c-82b8-011e235abcc2/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/18/fde1d710-607b-4881-8d30-81bc798890cd/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/16/10/53/18/78a656f1-0207-46f6-9f00-99b0bc093f2a/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "Portofino M",
                year: 2022,
                price: 339900,
                description: "The Ferrari Portofino M is the latest addition to the Portofino family. With its refined design and advanced technology, this luxury sports car is sure to turn heads. The M stands for 'Modificata,' and this version of the Portofino features a host of upgrades, including a more powerful V8 engine, improved aerodynamics, and enhanced handling. The interior is outfitted with the latest in-car technology, including a large infotainment screen and a state-of-the-art sound system. The car also boasts a retractable hardtop, allowing you to switch between an open-air and closed-cabin driving experience. With its unmatched performance, style and luxury, the Ferrari Portofino M is the ultimate driving machine.",
                mileage: 1005,
                bodyType: "Convertible",
                vin: "S0D9F8G7H6J5",
                exteriorColor: "Black",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/80f23277-5459-4547-9b21-2d59197612a1/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/4229fd4d-e711-4366-a87e-056da37f8b43/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/233694e8-de3b-4719-85ce-0f180758cdff/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/f84ef77e-0c77-4465-9300-b1a44fd53305/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/d219c0dc-d338-46c2-bca6-1054f93a243b/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/18/17/09/36/bb1724d7-c85d-480a-b9d5-52ce41036982/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/18/17/09/36/df641957-eb46-44b4-b819-336732da6dfa/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/3aacf3be-d35d-4a8e-95ff-5944808fd8b2/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "812 Superfast",
                year: 2019,
                price: 384908,
                description: "The 812 Superfast is a limited-edition grand tourer from Ferrari that boasts a powerful V12 engine and sleek, aerodynamic design. With a top speed of 211 mph and a 0-60 time of just 2.9 seconds, this car is built for speed and performance. The exterior features sharp lines and a bold front grille, while the interior is luxurious and sophisticated, with leather seats and advanced technology features. The 812 Superfast is a true masterpiece of engineering and design, and offers an unparalleled driving experience for the lucky few who get to own one.",
                mileage: 7016,
                bodyType: "Coupe",
                vin: "JMI8HJN9H8YE3D",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/30/5eb3681e-4778-4c64-9849-8409b128c7a0/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/36/a4af2e61-c35c-46a5-9ace-050c33fd117b/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/36/b94cd8c3-145b-4ba7-b0d3-2875147ee0e7/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/30/f330f4a8-9371-417c-b374-3ebd81fef18e/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/31/035d97ab-8fd1-42bb-89c8-fa32f2d71fbe/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/30/d84c737c-8334-444b-b95e-23b5e6e3321e/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/30/003d5386-9ef0-4e8b-ab78-2ad1a0137588/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/31/a5680cea-5830-43b4-bb7a-99e1fb135829/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "Monza SP2",
                year: 2023,
                price: 4658735,
                description: "The 2023 Ferrari Monza SP2 is a limited-edition, open-top sports car that is a true masterpiece of engineering and design. The Monza SP2 is powered by a 6.5-liter V12 engine that produces 799 horsepower and 530 lb-ft of torque, allowing it to reach top speeds of over 200 mph. Its lightweight carbon-fiber body and advanced aerodynamics provide exceptional handling and performance. The Monza SP2 also features a unique 'bridge' design, with a single-seat configuration and a second seat behind the driver for a passenger. Inside, the cabin is adorned with premium materials and state-of-the-art technology, including a fully digital instrument cluster and a high-performance sound system. Only 500 units of the Monza SP2 will be produced, making it an incredibly exclusive and highly sought-after vehicle.",
                mileage: 0,
                bodyType: "Convertible",
                vin: "JU6YH5JUTR",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/38/4c6ae676-5151-47ab-a2f6-f57c6d6d0b64/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/38/608b1b65-83b7-4b11-8893-02dbba797ebf/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/37/fe501034-3b4b-4cb2-be87-26642fa21b73/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/37/df41632b-0537-4eb9-87cd-8347c7c1b627/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/45/04e1170d-8e74-443b-93f1-a4818c1e769f/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/38/de362e29-5308-44b1-852c-cbf765c74704/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/45/67aed9c5-608e-4049-a73a-3ec44afb0f02/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/09/20/15/35/38/bd43c327-25e2-48cf-a5af-46b83a1e0020/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "F40",
                year: 1991,
                price: 3197248,
                description: "The Ferrari F40 is a legendary sports car from the Italian automaker, known for its sleek design, powerful engine, and exceptional speed. Built from 1987 to 1992, only 1,311 units were produced making it one of the rarest Ferraris on the market. It was powered by a 2.9-liter V8 engine that produced 471 horsepower and 426 lb-ft of torque. It was able to accelerate from 0-60 mph in just 3.8 seconds and had a top speed of 201 mph. The car was built with a lightweight design, featuring a composite body and minimal interior amenities. It was a true driver's car, meant for the track and the serious enthusiasts. Today, the Ferrari F40 is considered a classic and highly sought after by car collectors and enthusiasts.",
                mileage: 32,
                bodyType: "Coupe",
                vin: "RSETDRYTETRT4",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2019/02/11/16/48/04/ad8e39d4-46f4-42a2-97f5-6a2f108434c7/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2019/05/07/14/22/24/a1b34d63-4c74-4d91-a739-0dfc8f12825f/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2019/02/11/16/48/04/dff0fb3d-5479-4a64-bb61-3392925790fb/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2019/05/07/14/22/24/ec1259cd-f200-4e62-9f07-cba38f15ecb5/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2019/05/07/14/22/24/c29c649f-22a7-48c0-a315-ec683f93fda5/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2019/05/07/14/22/24/1c49dedf-84e2-4a5d-93ff-d393fc778c1f/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2019/05/07/14/22/23/c3686e69-fdb8-49fe-9568-1ab71cd2fb41/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2019/02/11/16/48/04/6e613301-57ea-4940-a397-696f7e9ba1da/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "LaFerrari",
                year: 2015,
                price: 4226995,
                description: "The Ferrari LaFerrari, also known as the F70, is a limited-edition hybrid supercar that was produced by Ferrari between 2013 and 2016. It is powered by a 6.3-liter V12 engine that is paired with a hybrid electric motor, which produces a total of 949 horsepower. The LaFerrari is capable of reaching a top speed of 217 mph and can accelerate from 0-60 mph in under 3 seconds. The car features active aerodynamics, advanced carbon-fiber construction, and a sleek, futuristic design that sets it apart from other Ferraris. Only 499 units were produced, making it one of the most exclusive and sought-after models in the Ferrari lineup.",
                mileage: 345,
                bodyType: "Coupe",
                vin: "M7YJNU6N6TB5",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/15/f88543c8-0a5d-4b03-b6d1-27ed1ce31279/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/16/20418dac-df5f-4177-aed6-0d9b42c11445/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/16/871d00ba-62d1-4de2-9f95-22e7918ea11f/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/15/08c603bb-853d-4464-917b-991b5afd8606/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/16/4ade61d6-811b-4335-9193-203ef951fa09/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/16/336dba12-e6e5-422e-8745-4b228a88e206/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/16/734c4ea6-0b3b-44d7-b864-b85f02b37a3c/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/16/e004dc92-3714-4046-9d75-37d9bd71e078/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "599",
                year: 2012,
                price: 1034573,
                description: "The Ferrari 599 is a high-performance grand tourer produced by Italian automaker Ferrari. The 599 GTB (Gran Turismo Berlinetta) was the brand's two-seat flagship, replacing the 575M Maranello in 2006 as a 2007 model. It was the company's front-engined, two-seat flagship, replacing the 550 Maranello. Styled by Pininfarina under the direction of Ferrari's Frank Stephenson, the 599 GTB debuted at the Geneva Motor Show in February 2006. It is named for its total engine displacement, 5999 cc, and Gran Turismo Berlinetta nature. The Tipo F140 C V12 engine used in the 599 GTB produces a maximum power output of 612 horsepower at 7600 rpm and 448 lb-ft of torque at 5600 rpm. The 599 GTB's body was designed by Pininfarina's Frank Stephenson, and the car features an Enzo-derived V12 engine and transmission, and advanced suspension and braking systems. With a top speed of 205 mph and acceleration from 0-62 mph in 3.7 seconds, the 599 GTB is a true supercar.",
                mileage: 15315,
                bodyType: "Coupe",
                vin: "M87N6B57N6B5",
                exteriorColor: "Yellow",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/46/25168fb3-a8f4-499a-9118-1f07d60a5803/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/46/b7a713a0-262d-46ff-a90f-441d62a156a9/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/47/bd102105-3797-412c-84d3-168cad989cf1/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/46/b526d870-b43b-4f8d-aee8-5e54abb009e1/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/46/d6cef5c6-a1b7-42c2-944f-5ffabfddf778/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/46/fcc5af6f-a3e5-4a0d-9c60-fad0820f7e8a/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/47/c5d23c35-151c-4b87-b154-91547248ec2a/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/08/05/15/44/47/f353f01a-2c8b-49e2-9401-621d3c0bbc2b/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "365",
                year: 1973,
                price: 587315,
                description: "The Ferrari 365 is a classic grand tourer that was produced by the Italian automaker Ferrari from 1968 to 1973. It was available in several different versions, including the 365 GT 2+2, 365 GTC/4, and 365 GTS/4 'Daytona Spider'. The 365 GT 2+2 was powered by a 4.4-liter V12 engine that produced 320 horsepower and could reach a top speed of around 250 km/h. The 365 GTC/4 and GTS/4 were equipped with the same engine, but featured a longer wheelbase and a 2+2 seating configuration. The 365 was praised for its stunning design, powerful engine, and exceptional handling, making it a popular choice among Ferrari enthusiasts. With only around 800 units produced, the Ferrari 365 is considered a highly sought-after collector's car today.",
                mileage: 43229,
                bodyType: "Coupe",
                vin: "M87NU67N6TB",
                exteriorColor: "Red",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2021/06/29/08/45/21/5d272160-05cc-4608-97fd-6ff785317fac/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/9dd35ae1-8cc2-4b2a-bd59-309968113cdf/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/9cb69afb-b741-4d08-9be2-9d59d202db4d/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/77620599-55d9-4cf9-87ec-5b952af46afd/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/378674b5-3b07-442c-817a-ce1a5e76ebf3/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/41e8f803-9df7-4079-966f-4cdf5834432a/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/11424eca-9dfd-4194-839b-3615fc9d4205/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2021/08/24/08/35/17/2272c95e-61fb-4902-8648-2dc3a10bbf37/je/768xxsxm.jpg"
            });
            await createFerrari({
                make: "Ferrari",
                manufacturerId: 3,
                model: "246",
                year: 1970,
                price: 542781,
                description: "Example of 2022 Ferrari 458",
                mileage: 4977,
                bodyType: "Coupe",
                vin: "MI5GU7RVBTNYU",
                exteriorColor: "Yellow",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2019/07/04/08/36/42/b5efcc28-7efd-4c70-b9d3-37fd95a84043/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2019/07/04/08/36/42/e1f4b5c1-c63c-4363-9c3c-1f7ef505bc8e/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2019/07/04/08/36/42/c2bf90a8-be39-496b-92ee-b843430347ab/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2019/07/04/08/36/41/49402a4f-18ee-4096-91e5-6812ab85b562/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2019/07/04/08/36/43/ade10d7a-8cbf-4366-b57e-cd34aac1b602/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2020/07/17/12/02/24/96ca62f8-47fd-4438-97cf-8821f1d79c88/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2020/07/17/12/02/26/24bf155e-5aa0-4354-8451-bf6a7657389a/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2019/07/04/08/36/42/80deb283-ead5-4f0f-98a7-8ce600d7bbaa/je/768xxsxm.jpg"
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
                year: 2021,
                price: 4018477,
                description: "The Koenigsegg Regera is a limited-edition hybrid supercar that boasts a sleek and aerodynamic design. With a 5.0-liter V8 engine and three electric motors, this car is capable of producing a staggering 1,500 horsepower. The Regera has a top speed of 260 mph and can accelerate from 0-60 mph in just 2.5 seconds. The interior of the car is equally impressive, featuring leather upholstery, a 9-inch infotainment system, and advanced driver assistance systems. Only 80 units of the Regera were ever produced, making it a highly sought-after collector's item among car enthusiasts.",
                mileage: 1058,
                bodyType: "Coupe",
                vin: "D5FG6N78SD6F7",
                exteriorColor: "Black",
                interiorColor: "White",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/a7fb5cfb-0a33-4622-bd0c-76540742f504/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/c64ddec1-25ba-47df-bf41-a1c5d6701b6f/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/930e4c35-92fd-4e26-948e-3758d1c36282/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/fc8af07f-11db-4129-bd0f-aa6ff26840ea/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/49e95640-3238-4968-90b4-5c5e9b6303db/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/6339491d-7a31-4429-8bdc-0a471f42ba9c/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/49e95640-3238-4968-90b4-5c5e9b6303db/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/086fae01-002c-4183-b26b-3da781bdfc33/je/768xxsxm.jpg"
            });
            await createKoenigsegg({
                make: "Koenigsegg",
                manufacturerId: 4,
                model: "Agera R",
                year: 2014,
                price: 3456649,
                description: "The Koenigsegg Agera R is a limited-edition supercar that boasts a powerful 5.0-liter V8 engine producing 1,140 horsepower and 811 lb-ft of torque. The car is built with a lightweight carbon fiber body and features active suspension, active aerodynamics, and advanced electronic stability control. With a top speed of over 260 mph, the Agera R is one of the fastest production cars in the world. It also features advanced interior features such as 9 inch touchscreen display, active sound cancellation, and a full leather interior. This exclusive car is sure to turn heads on the road and is a must-have for any car enthusiast.",
                mileage: 11644,
                bodyType: "Coupe",
                vin: "JH5G6K6J7H",
                exteriorColor: "Black",
                interiorColor: "White",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/f74f4507-6b09-4ed3-8474-527498e3121f/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/e5579e97-6c4c-4f73-bf4e-382657c5c1fa/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/b4d48ad1-9330-45e1-aa26-7a8fd14a0cfb/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/7d5ae65c-3465-4b17-a260-2c96bc52a280/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/f8513d1c-b391-4977-a6b7-9682ab840d0c/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/9d66cd50-9d00-49b1-87cc-c2ed6594f0af/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/02e6a63c-46bd-4eb9-abea-adda72977d5c/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/ee57a4f7-3508-4310-8e70-c39607aeae33/je/768xxsxm.jpg"
            });
            await createKoenigsegg({
                make: "Koenigsegg",
                manufacturerId: 4,
                model: "Gemera",
                year: 2023,
                price: 1735494,
                description: "The Koenigsegg Gemera is a hybrid supercar that boasts a 4-seater, 4-door configuration and cutting-edge technology. The car is powered by a 2.0-liter, 3-cylinder engine that is combined with three electric motors, resulting in a total output of 1,700 horsepower and 2,581 lb-ft of torque. The powertrain is paired with a 9-speed, direct-drive transmission and all-wheel drive, allowing for a 0-60 mph acceleration time of just 1.9 seconds and a top speed of 250 mph.  The exterior of the Gemera features a sleek and aerodynamic design, with a low-slung stance, a wide stance, and a distinct front fascia. The car sits on large, lightweight wheels and is finished in a range of vibrant colors. The interior of the car is equally impressive, with a spacious and luxurious cabin that is trimmed in high-quality materials and features a range of advanced technologies and amenities.  The Koenigsegg Gemera is an exclusive and highly sought-after supercar that offers a unique combination of performance, luxury, and technology. It is a perfect choice for those who want to experience the ultimate in automotive engineering and design.",
                mileage: 0,
                bodyType: "Coupe",
                vin: "HG56F7H7J6K5",
                exteriorColor: "Grey",
                interiorColor: "Orange",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/2187e3a0-8f1c-4749-8ec9-87b7cd9d2780/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/0cfc39ad-6ad7-499d-89b0-887e141ea365/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/a00327e8-7817-4d21-9f84-9c51ca58f2b7/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/be582280-167a-48da-bb9d-5395de049586/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/464777ad-e6e9-40ff-aa57-dd467bad5a3d/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/c256780c-c502-439b-8ffe-e9047bde32bf/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/d3dc9e66-d88b-4a5f-aba2-6e71b0d19201/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/06/06/16/27/52/9877ccff-3fd1-4610-a2be-a93bb5d4eac0/je/768xxsxm.jpg"
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
            model: "Countach",
            year: 2023,
            price: 461979,
            description: "An omage by Lamborghini to The Lamborghini Countach was a mid-engined sports car that was produced by Italian automaker Lamborghini from 1974 to 1990. It was designed by Marcello Gandini and was one of Lamborghini's most popular and iconic models. It was known for its futuristic and angular design, as well as its high performance and powerful V12 engine.",
            mileage: 0,
            bodyType: "Coupe",
            vin: "F7G6H5JG7VCV",
            exteriorColor: "White",
            interiorColor: "Red",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/12/16/15/58/01/b84f5f03-6246-4054-9f47-60d4c213265b/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/12/16/15/58/00/dd141151-6621-4ac0-a3c5-8319b966050e/je/768xxsxm.jpg",
            imageThree: "https://www.gtopcars.com/wp-content/uploads/2022/01/2023-Lamborghini-Countach-Hybrid-V12.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/12/16/15/58/00/49881b59-6f3f-4159-854c-5f72657e2bcd/je/768xxsxm.jpg",
            imageFive: "https://drives.today/upload/000/u1/6/1/61702bbe.jpg",
            imageSix: "https://www.gtopcars.com/wp-content/uploads/2022/01/2023-Lamborghini-Countach-Car.jpg",
            imageSeven: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/countach/gallery/countach_g04.jpg",
            imageEight: "https://drives.today/upload/000/u30/9/4/2023-lamborghini-countach-lpi-800-4-image-big.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Sian",
            year: 2023,
            price: 3467254,
            description: "The 2022 Lamborghini Sian is a limited-edition hybrid supercar that combines cutting-edge technology with a sleek and aerodynamic design. It features a powerful 6.5-liter V12 engine paired with an electric motor for a total output of 819 horsepower. The car can reach a top speed of 221 mph and accelerate from 0-62 mph in just 2.8 seconds. The Sian's exterior is characterized by sharp lines and aggressive angles, with a low stance and a large rear wing. Inside, the car is outfitted with a luxurious cabin featuring leather seats and advanced technology such as a digital instrument cluster and a large infotainment display. The Sian is a true masterpiece of engineering and design, a perfect blend of performance and luxury.",
            mileage: 0,
            bodyType: "Convertible",
            vin: "DF6G7HCFV6G7BH8",
            exteriorColor: "Blue",
            interiorColor: "Black",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/12/21/15/42/02/dcab68c0-3b5b-469f-bd67-7af5349f787d/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/12/21/15/41/56/bdb7168f-1535-406b-ad2e-9a225a0ca0e6/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/12/21/15/41/57/ec1cf743-88fd-498e-b71e-97bbf52f5563/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/12/21/15/41/57/e1c19897-526b-4b96-abbc-f44f384c9d59/je/768xxsxm.jpg",
            imageFive: "https://autonxt.net/wp-content/uploads/2020/07/Lamborghini-Sian-Roadster11.jpg",
            imageSix: "https://motorillustrated.com/wp-content/uploads/2020/07/Lamborghini-Sian-Roadster-14888.jpg",
            imageSeven: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/07_08_sian_rds_launch/SIAN_rds-06_M.jpg",
            imageEight: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/07_08_sian_rds_launch/SIAN_rds-04.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Veneno",
            year: 2015,
            price: 9528697,
            description: "The Lamborghini Veneno is a limited-edition, high-performance sports car that was first introduced in 2013. The car is powered by a 6.5-liter V12 engine that produces 750 horsepower and 507 lb-ft of torque, allowing it to reach top speeds of 221 mph. The Veneno features a bold and aggressive design, with sharp lines and aerodynamic features that give it a unique and striking appearance. Its interior is also luxurious, with high-end materials and advanced technology features. Only a handful of Venenos were ever produced, making it a highly sought-after and exclusive vehicle.",
            mileage: 3164,
            bodyType: "Convertible",
            vin: "SD5F6G7H8DF6G7",
            exteriorColor: "Black",
            interiorColor: "Green",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/44/205d14cb-6f8a-4cab-8892-9777803e7be4/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/47/06bc4ffd-3bb3-4116-94bf-ef1a06b635c2/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/47/bcc6b248-1974-4ecf-bb85-4f63ec09fe41/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/47/ea33d4a6-4069-4798-ae73-530ec2fcafbc/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/43/0bdd2158-631a-427e-8896-d3d50d4244bb/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/46/8af679f5-b42f-43f9-94e4-15e5d6da37f4/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/46/0e2511ef-c8db-4dcc-9503-4189d582a0bf/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/44/3206dc68-a7fa-40ce-adef-0ae292652363/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Huracan STO",
            year: 2023,
            price: 379805,
            description: "Available only as a two-door coupe, the 2022 Lamborghini Huracan STO is an exotic mid-engine sports car made for maximum performance on or off the racetrack. It comes with a 5.2-liter V10 engine (630 horsepower and 417-lb-ft of torque), a seven-speed dual-clutch automatic transmission and rear-wheel drive.",
            mileage: 50,
            bodyType: "Coupe",
            vin: "SD6FG7B86FV7B",
            exteriorColor: "Green",
            interiorColor: "Black",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/263bbe9e-2891-4ff3-a099-7bdbe55913fa/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/b07f1104-ae6b-4f0e-bf3a-f86861e9b822/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/a291ea6f-2392-4c66-9a46-2fa017317f7f/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/135b0dda-3914-4f1c-8aeb-b420e6ba4cd8/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/c6b3a512-e872-42b1-b380-7b1e53cd3ffb/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/337ea858-f99a-4e8e-a034-66aa528d5c76/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/178b8f23-0dfe-44db-822d-1d15e361c215/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/10/12/12/35/46/c2ac1a22-1033-4c5f-8f92-a8b0bfaba243/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Huracan EVO",
            year: 2022,
            price: 329951,
            description: "The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features, combined with new design solutions that increase performance, the car stands out for its ability to anticipate and cater to the drivers behavior, expectations and desires.  The Huracán EVO introduces refined aerodynamic solutions while remaining true to the design philosophy that is the hallmark of Lamborghini.  The front bumper adopts unmistakable Lamborghini Y-shape stylistic elements, hood lines inspired by the Countach, skirt air intakes reminiscent of the Murciélago, and central high-mounted exhaust tailpipes that recall the highest-performance Lamborghini models of the past.  New features include 20-inch Aesir rims and new Ad Personam colors for the bodywork. ",
            mileage: 405,
            bodyType: "Convertible",
            vin: "C5V6B7C6VB78",
            exteriorColor: "White",
            interiorColor: "Red",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/4d9d12cd-7f92-46fc-84bc-0b185bd3f4c3/je/768xxsxm.jpg",
            imageTwo: "httpshttps://img.jamesedition.com/listing_images/2022/12/20/15/19/45/f518f7f9-f7f5-458b-8186-0d2878d6a35d/je/768xxsxm.jpg://img.jamesedition.com/listing_images/2022/12/20/15/19/45/bf6f5d19-0ea9-4a20-834c-02c5e8d9ffa3/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/fba8bf7f-b071-41a2-aa86-9dbc07417414/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/2b834430-cc3f-4397-98c9-7f9c1ad08ccb/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/f45c6b59-660d-4ca2-b1b6-ea12b5c59ac1/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/33e40381-1123-4125-945b-d5753153eb1c/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/211e11d9-af9b-4442-9f01-c09f7c1c1812/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/56d915fe-87c3-4bc6-849e-201f62b9ec63/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Urus",
            year: 2021,
            price: 279951,
            description: "The Lamborghini Urus is a high-performance luxury SUV that was first introduced in 2018. It features a 4.0-liter V8 engine that produces 641 horsepower and 627 lb-ft of torque, allowing it to accelerate from 0-60 mph in just 3.6 seconds. The Urus also comes equipped with advanced technologies such as all-wheel drive, active suspension, and a torque vectoring system for optimal handling and performance on any terrain. The exterior design is bold and aggressive, with sharp lines, sharp angles and a unique hexagonal front grille. The interior is adorned with premium materials and state-of-the-art technology, including a 12.3-inch TFT instrument cluster and a large touchscreen infotainment system. The Urus also offers a spacious and comfortable cabin, making it a great option for families or those who need the versatility of a SUV.",
            mileage: 4377,
            bodyType: "SUV",
            vin: "XC6VB78NCV7CVB",
            exteriorColor: "Black",
            interiorColor: "Black",
            doors: 4,
            imageOne: "https://img.jamesedition.com/listing_images/2022/11/18/14/56/37/dbadf0ff-6403-41c5-aa9f-8f9ff8480834/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/11/18/14/56/37/c0bd705e-50cf-4288-b4ee-cca913477ddb/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/11/18/14/56/37/1aaaf948-6431-446c-9f5d-ac22f1caed96/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/08/31/15/03/16/cbed8ffa-fee8-4ed2-8dc7-b41f48723b32/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/08/31/15/03/16/e1142797-b870-4a51-9b69-8b3f99622775/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/08/31/15/03/16/fe0befdf-9219-4a4e-bc2a-f54a6179bcf7/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/08/31/15/03/16/1582ab94-84e6-4c98-8fab-ed6c574ca326/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/11/18/14/56/37/d00e11e8-38dc-4cde-9a0c-2b30a87d3560/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Aventador S Roadster",
            year: 2018,
            price: 547951,
            description: "The Lamborghini Aventador S is a high-performance sports car that boasts a sleek and aerodynamic design. Its exterior features sharp lines and angles, with a low, wide stance that exudes power and aggression. The car is powered by a 6.5-liter V12 engine that generates 730 horsepower and 509 lb-ft of torque, allowing for a top speed of 217 mph and a 0-60 mph acceleration time of just 2.8 seconds. The Aventador S also features advanced suspension and braking systems, as well as advanced aerodynamics that help to increase downforce and improve handling. Inside, the car is equipped with a range of luxury features, including leather seats, a high-quality audio system, and a digital instrument cluster. The Aventador S is a true masterpiece of engineering and design, and is sure to turn heads wherever it goes.",
            mileage: 766,
            bodyType: "Roadster",
            vin: "FVGB67C6VB7",
            exteriorColor: "White",
            interiorColor: "Red",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/89af5941-5675-407d-8069-8c2cdf8e5c7f/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/6a7fd0eb-5fb4-448e-8d5f-21fb40be95b9/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/863e569c-59af-4d0b-8126-e0e33f2fe99c/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/0aa83693-edf7-4376-b9d3-95a2c25ec0f7/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/e73fcc48-ff6c-4301-8b8f-efffa731aa89/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/5bfd8f79-3551-4e58-9a65-0a036e20e363/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/bac32496-dc2a-43de-9301-c8ac433dbea3/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/fcb86b3f-6577-46f0-91de-9419c97c7c64/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Aventador SVJ Roadster",
            year: 2022,
            price: 798367,
            description: "The 2022 Lamborghini Aventador SVJ is all about stamina, style and power. Engineered to perform at the highest level, this athletic marvel proudly revives the authentic thrill of driving. It has a commanding presence and irresistible allure thats certainly worth exploring.  To call this super sports car eye-catching is an understatement. Taking inspiration from aerospace design, the Aventador SVJ is exotic and daring both inside and out. It has a futuristic appeal characterized by its connected and technology-driven interior, as well as its enhanced aerodynamic profiles, signature scissor doors, and omega-shaped rear wing on the exterior.  In terms of exclusivity, only 63 special edition SVJ models are in existence; these rarities feature a unique color offering and carefully-crafted carbon fiber finishes.",
            mileage: 3114,
            bodyType: "Roadster",
            vin: "NB67V8CNBV78",
            exteriorColor: "Black",
            interiorColor: "Black",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/b01c6b6b-0ef5-41ec-983b-fba9c8a7d1d4/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/ab2e5d7e-1daf-4011-b5ef-43ec5cccaef8/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/b67749f6-9e88-488a-9f31-43bcb30e99ea/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/b7f94c6e-54f1-44d0-996a-a123c4e5adf2/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/510dfa20-1233-4aac-96a9-f10796962370/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/bb22ee1f-87cf-4b88-a03f-695382475894/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/e2f0caac-e661-4b52-a814-22cecd75959b/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/09/28/16/07/08/2aceee06-34c6-4b5b-b23a-eb2d4e40077a/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Urus",
            year: 2022,
            price: 327951,
            description: "The Lamborghini Urus is a high-performance SUV that combines the luxury and refinement of a Lamborghini with the versatility and practicality of an SUV. It features a 4.0-liter V8 engine that produces 641 horsepower and 627 lb-ft of torque, allowing it to go from 0-60 mph in just 3.6 seconds. The exterior of the Urus is sleek and aerodynamic, with sharp lines and a bold design that is sure to turn heads. The interior is no less impressive, with luxurious leather seats, advanced technology, and a host of advanced safety features. With its impressive performance, cutting-edge technology, and undeniable luxury, the Lamborghini Urus is the ultimate in high-performance SUVs.",
            mileage: 3658,
            bodyType: "SUV",
            vin: "CVB67N8VB78CV",
            exteriorColor: "Grey",
            interiorColor: "Blue",
            doors: 4,
            imageOne: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/1977cb76-b510-4254-b352-8dde79bfb275/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/9512fff7-0cae-4f32-b079-a3bacb4ce871/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/fc31fcef-d38e-4dcc-b194-2e723237dabf/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/1201ef96-96a3-4b61-967f-9167191ba0e0/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/161590ff-9a5b-4b66-81b5-7fa8292d5434/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/8b01482f-a242-4b44-84ca-04634ee7cd90/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/ad67270e-521d-4c5d-8112-d86b2af7d853/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2023/01/11/14/56/23/28a169a3-ab98-4b0e-ba84-b2b5278dc11e/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Diablo VT Roadster",
            year: 1997,
            price: 768565,
            description: "The Lamborghini Diablo VT Roadster is a high-performance sports car produced by Lamborghini between 1995 and 1998. It was a convertible version of the Diablo VT coupe, and featured the same 5.7-liter V12 engine that produced a maximum power of 492 horsepower. The Roadster could accelerate from 0-60 mph in just 4.5 seconds and had a top speed of 202 mph. It featured a sleek, aerodynamic design with a low, wide stance and aggressive lines. The Roadster also featured advanced technologies such as all-wheel drive and active suspension, making it one of the most capable and thrilling cars of its time. Only a limited number of these cars were produced, making them highly sought-after by collectors and enthusiasts.",
            mileage: 42165,
            bodyType: "Roadster",
            vin: "CFVGH78DFGH7F",
            exteriorColor: "Red",
            interiorColor: "Red",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2018/10/30/11/09/22/10a0a738-e177-48ef-9164-47159716fa56/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2018/10/30/11/09/22/49a887f4-4ba6-4568-9b6b-cac7c5c86301/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2018/10/30/11/09/23/5a0fff4c-b823-47f3-9676-bdc1a974f1ba/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2018/10/30/11/09/22/ac4a5d5f-2f8a-4146-a7fa-3eeb832d2a72/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2018/10/29/11/07/16/694c7a38-227f-47f6-9fe0-0c9a9e12779c/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2018/10/30/11/09/22/10a0a738-e177-48ef-9164-47159716fa56/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2018/10/30/11/09/23/ad038d63-bf65-445d-89b3-8c39339c2638/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2018/10/31/04/48/34/742010ba-f108-4868-8eed-a9130068d4e7/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Murcielago",
            year: 2007,
            price: 228013,
            description: "The Lamborghini Murcielago is a high-performance sports car that was produced by the Italian car manufacturer Lamborghini between 2001 and 2010. The car was powered by a 6.2-liter V12 engine that produced up to 661 horsepower, and could reach a top speed of approximately 212 mph. The Murcielago was available in both coupé and roadster body styles, and featured a distinctive design that included sharp angles, scissor doors, and a futuristic-looking interior. The car was also notable for its all-wheel drive system and advanced suspension, which helped it to handle well on both the road and the track. The Murcielago was succeeded by the Aventador in 2011.",
            mileage: 48065,
            bodyType: "Coupe",
            vin: "DFG678DFG7FGTJ",
            exteriorColor: "Yellow",
            interiorColor: "Black",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/d56c87d6-531a-4b5e-916b-ecc71323bd42/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/0fe8c7d9-8ec0-4321-9771-8b6e823d99f5/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/c8516495-9913-442b-92ff-74c3a1f8db49/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/25/e988893d-b17e-41f8-93fe-579d7c6bb631/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/e4a610ee-9d08-41b0-928e-85b213a141dc/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/94716cb9-0f3c-4324-9d42-100fd962af99/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/e2956a4e-0d9f-4e2b-918e-2a02f528c258/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/802d466a-c17a-4ba5-8552-341b23473962/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Aventador S",
            year: 2020,
            price: 484343,
            description: "The Lamborghini Aventador is a high-performance sports car that was first introduced in 2011. It is powered by a 6.5-liter V12 engine that produces 700 horsepower and 509 lb-ft of torque. The car can accelerate from 0 to 60 mph in just 2.9 seconds and has a top speed of 217 mph. The Aventador features a unique design that incorporates sharp angles and aerodynamic lines, and it is built using advanced materials such as carbon fiber and aluminum. It also features a cutting-edge suspension system, advanced braking system and all-wheel drive. The interior of the car is luxurious and features high-end materials and advanced technology such as a digital instrument cluster and a high-end infotainment system. The Aventador is known for its incredible performance and handling, making it one of the most sought-after super cars on the market.",
            mileage: 2135,
            bodyType: "Convertible",
            vin: "NBHG789DFGUJ",
            exteriorColor: "Blue",
            interiorColor: "Black",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/40/b056a23b-fb8d-419c-b798-2777ddf2e4c3/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/40/c0cb7e9a-e74b-46a8-8f1a-1bf812599db9/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/40/05499ae0-2436-44fe-bf9e-3ce8a9302695/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/39/289ded5b-08c0-4bb2-8275-12d8460e3a30/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/39/289ded5b-08c0-4bb2-8275-12d8460e3a30/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/48/a67cc31a-e4df-4dc0-aa5a-aebfb2c0c0b3/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/40/c0a10427-15e0-42a3-87fb-e18b6dd3f5a3/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/48/3d4458b9-111e-4d91-b731-43a469e11696/je/768xxsxm.jpg"
        });
        await createLamborghini({
            make: "Lamborghini",
            manufacturerId: 5,
            model: "Centenario",
            year: 2017,
            price: 2849768,
            description: "The Lamborghini Centenario is a limited-edition supercar that was created to celebrate the 100th birthday of the company's founder, Ferruccio Lamborghini. It was first introduced in 2016 and only 40 units were produced, 20 in coupe and 20 in roadster form.  The Centenario is powered by a naturally aspirated V12 engine that produces 770 horsepower and 507 lb-ft of torque. It can accelerate from 0-60 mph in just 2.5 seconds and has a top speed of more than 217 mph.  The car has a unique and aggressive design, with a carbon-fiber body, LED headlights, and a large rear wing. The interior is also luxurious and features a touchscreen infotainment system, premium leather upholstery, and advanced safety features.  The Centenario was a highly sought after car, and all units were sold before it was even officially revealed to the public. It is considered to be one of Lamborghini's most iconic models, and a true masterpiece of engineering and design.",
            mileage: 9467,
            bodyType: "Coupe",
            vin: "GH67J87HUJF",
            exteriorColor: "Black",
            interiorColor: "Black",
            doors: 2,
            imageOne: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/53cdaaa3-332f-4742-951f-37383819b14a/je/768xxsxm.jpg",
            imageTwo: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/24/f9b3df5f-21dd-4240-a793-a8736a10c3c9/je/768xxsxm.jpg",
            imageThree: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/25/914e22ee-7754-46c5-8957-8efbe8536bcb/je/768xxsxm.jpg",
            imageFour: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/24/5ac14557-b679-4af7-9126-777e7c7b2acc/je/768xxsxm.jpg",
            imageFive: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/c9f7b50b-a3ca-4468-8fb1-8f40c62bb0d7/je/768xxsxm.jpg",
            imageSix: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/e977a469-d9c3-4cac-b62d-38fc60da4249/je/768xxsxm.jpg",
            imageSeven: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/0d8936fb-7e8c-4edb-bd5c-18dd49f9c6bb/je/768xxsxm.jpg",
            imageEight: "https://img.jamesedition.com/listing_images/2023/01/10/12/22/23/53cdaaa3-332f-4742-951f-37383819b14a/je/768xxsxm.jpg"
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
                year: 2018,
                price: 1301850,
                description: "The McLaren Senna is a limited-edition, track-focused supercar that is truly in a league of its own. With its lightweight carbon fiber construction, powerful 4.0L V8 engine, and advanced aerodynamics, the Senna is designed to deliver an unparalleled driving experience on both the road and the track.  This particular listing is for a brand new, fully loaded Senna that comes in a sleek and striking 'Azura Blue' exterior color. The interior is outfitted in black Alcantara with contrasting blue stitching, and features an array of advanced technology and driver assistance systems. The car is equipped with the MSO (McLaren Special Operations) Defined package, which includes unique exterior and interior features such as carbon fiber racing seats, extended shift paddles, and a bespoke steering wheel.  Under the hood, the Senna boasts an impressive 789 horsepower and 590 lb-ft of torque, allowing it to accelerate from 0-60 in just 2.7 seconds and reach a top speed of 208 mph. The car also features an advanced active suspension system and advanced aerodynamics, including a rear wing that generates 800 kg of downforce at 150 mph.  This is a rare opportunity to own one of the most highly sought-after and exclusive supercars on the market. With only 500 units produced worldwide, the McLaren Senna is sure to turn heads and provide an unrivaled driving experience. Don't miss out on this chance to own a piece of automotive history. Contact us today to schedule a test drive!",
                mileage: 503,
                bodyType: "Coupe",
                vin: "R4HRNJTY5JNYTH",
                exteriorColor: "Yellow",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/26dca40e-a8f3-405b-9ae0-78f2a98006ae/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/cd8446a8-b5ea-4450-bdf7-59a3a710a7fd/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/13b72f7a-f3ff-4a1b-bdbf-e4675b95e318/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/b33849ae-0551-4fc4-bd11-abb9cb49817d/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/ff529427-b00d-45f1-b730-9711017632e1/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/6f1dd416-4e44-4f51-ab9b-7dbe03b22495/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/db8fb010-c172-4874-a62d-a854ca31b2b7/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/03/30/15/14/48/280cae42-2829-4cd7-b25f-7eaea75e241a/je/768xxsxm.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "Elva",
                year: 2023,
                price: 2061895,
                description: "The McLaren Elva is a stunning supercar that embodies the spirit of McLaren's racing heritage. With its sleek, aerodynamic design and powerful 4.0L V8 engine, this car is built for speed and performance. With a top speed of 208 mph, the Elva is one of the fastest cars in the McLaren lineup. The car's cutting-edge carbon fiber chassis and bodywork not only make it light and agile, but also provide unparalleled strength and durability. Inside, the Elva boasts a minimalist yet luxurious interior, with a focus on driver engagement and control. The car's advanced driver assistance systems and infotainment features ensure that every drive is a thrilling and comfortable experience. With its unique design, advanced technology, and unparalleled performance, the McLaren Elva is a true masterpiece of engineering and design.",
                mileage: 15,
                bodyType: "Cabriolet",
                vin: "K98JJ87H6G5F44F",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/84685fba-cf0e-49d3-9256-9ace19cf547a/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/2b476788-3671-4c95-b788-06d810761907/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/f8adea51-a7cd-41c6-92a2-3efee8440020/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/0ef610db-4ad5-45a7-ba41-0c281e244cd7/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/a75a6b24-f555-474d-92c6-57b58f6e6cb1/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/83a8eeae-c47f-4537-877a-bb9d407d76f8/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/d29633ef-fbe5-4804-814e-f11ab3411118/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/02/18/12/22/57/37f77782-9515-431f-94cb-b7253f47c691/je/768xxsxm.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "P1 GTR",
                year: 2015,
                price: 2040899,
                description: "The McLaren P1 GTR is a limited-edition track-focused version of the McLaren P1 hybrid supercar. With a modified version of the P1's 3.8-liter V8 engine and electric motor, the GTR produces an impressive 986 horsepower and 722 lb-ft of torque. The car has been stripped of all unnecessary weight, making it even lighter than the standard P1. The aerodynamics have also been optimized, with a large fixed rear wing, front splitter, and dive planes for increased downforce. The car sits on specially designed Pirelli slick tires for maximum grip on the track. The suspension and brake systems have been upgraded for improved handling and braking performance. With only 58 units produced, the McLaren P1 GTR is a rare and exclusive vehicle for the ultimate driving enthusiast.",
                mileage: 635,
                bodyType: "Coupe",
                vin: "K6JN7HB8GVVBETG",
                exteriorColor: "White",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/36/cd648aa4-8bf2-4a89-9b2b-a5179e7081b5/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/43/006b39aa-1159-4682-980c-5fb80c3956cf/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/43/c3ec9374-d924-431c-acdd-89b3b9fb541a/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/36/2757655a-16dc-450a-bfa1-665908904b8c/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/43/666cfe54-3f32-41d1-874a-ff95cc8ec9bf/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/36/8dc548e3-5da4-4c94-ae4a-22297bc905db/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/43/cc47ebce-168b-419a-a255-5643b104c4ce/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2021/06/15/10/17/36/a0a8006f-7c4f-4eac-9696-d155d6a3fedc/je/768xxsxm.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "765 LT",
                year: 2021,
                price: 530627,
                description: "Introducing the Mclaren 765LT, a limited-edition supercar that pushes the boundaries of performance and design. This track-focused machine boasts a 4.0L V8 engine that generates an astonishing 755 horsepower and 590 lb-ft of torque. It's paired with a 7-speed automatic transmission that delivers smooth, lightning-fast shifts.  The 765LTs aerodynamics have been optimized to reduce drag and increase downforce, resulting in a car that feels planted and in control at high speeds. It is also lighter than the standard 720S, thanks to extensive use of carbon fiber throughout the body and chassis. Inside, the 765LTs cabin is a masterclass in luxury and performance. The seats are made from lightweight carbon fiber, and the dashboard and door panels are trimmed in Alcantara. The infotainment system features a high-resolution touchscreen display, and the steering wheel is wrapped in leather.  The Mclaren 765LT is a true driver's car, with responsive handling and precise steering that make it a joy to drive on the track or on winding roads. It's also a head-turner, with its sleek, aggressive styling that's sure to turn heads wherever it goes. With only 765 units produced, this is a rare opportunity to own a piece of automotive history. Don't miss out on your chance to own one of the most exclusive supercars on the planet.",
                mileage: 8001,
                bodyType: "Coupe",
                vin: "FJHUY6Y6YI69F",
                exteriorColor: "Green",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/43/f8805135-6a02-4916-a772-a77aa92888b7/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/42/e9542ac1-3f40-4617-848b-6fffd30383bf/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/43/9d992095-4710-4c22-add4-813b2a29e7ea/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/42/167a239b-28e1-454d-af39-1d6292362a3c/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/42/8ef2cc44-63f5-47d3-80d2-23e5f60e0a14/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/43/0ef02735-85db-48c7-9f2e-633734ab7bdd/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/42/af83f3c5-7586-4a2c-a265-b4e0a6c51a14/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/10/21/15/23/42/fb6b5195-937e-4a74-9a31-d9d3ecad450b/je/768xxsxm.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "Speedtail",
                year: 2020,
                price: 2989900,
                description: "The McLaren Speedtail is a hybrid supercar that was first introduced in 2018. It features a sleek and aerodynamic design, with a long, tapered nose and a curved, streamlined body. The car is powered by a 4.0L V8 engine paired with an electric motor, producing a total of 1,035 horsepower and 848 lb-ft of torque. This allows the Speedtail to accelerate from 0-60 mph in just 2.5 seconds and reach a top speed of 250 mph. The car also features advanced aerodynamics and lightweight materials, such as a carbon fiber monocoque, to enhance its performance. The interior is luxurious and designed with the driver in mind, with a focus on ergonomics and advanced technology such as a digital instrument cluster and infotainment system. With a limited production run of 106 units, the McLaren Speedtail is a highly exclusive and sought-after vehicle for car enthusiasts and collectors.",
                mileage: 403,
                bodyType: "Coupe",
                vin: "URTF6UFIYFFH",
                exteriorColor: "Grey",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/10/09/24/10/26a62662-b0d6-41e6-ada2-2ed40f9c1bc4/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/10/09/24/16/939c6931-3e2f-4121-98e8-82750ea3c4bb/je/768xxsxm.jpg",
                imageThree: "https://www.luxuryandexpensive.com/pic/44452_1.jpg",
                imageFour: "https://www.marshallgoldman.com/imagetag/2117/5/l/Used-2020-McLaren-Speedtail-1646341881.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/10/09/24/10/7ddccb58-badd-4796-bd1f-8a04058f6bac/je/768xxsxm.jpg",
                imageSix: "https://luxurybriefing2-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/08/18124158/Large-11084-ChantillyArtsEleganceRichardMille-McLarenSpeedtailawardedBestofShow2019foritsstunningdesign.jpg",
                imageSeven: "https://www.netcarshow.com/McLaren-Speedtail-2020-1600-02.jpg",
                imageEight: "https://www.marshallgoldmanoh.com/imagetag/2815/9/l/Used-2020-McLaren-Speedtail-1673033714.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "Senna GTR",
                year: 2020,
                price: 1978648,
                description: "Introducing the ultimate track weapon, the McLaren Senna GTR. With a 4.0-liter V8 engine producing 814 horsepower and 590 lb-ft of torque, this limited-edition supercar is truly one of a kind. The Senna GTR features aggressive aerodynamics, including a massive rear wing and diffuser, to provide maximum downforce and stability on the track. The lightweight carbon fiber body and advanced suspension system make this car incredibly agile and responsive. With a top speed of 208 mph, the Senna GTR is the fastest car McLaren has ever produced. Only 75 units will be produced, making this a rare and highly sought-after car for collectors and enthusiasts alike. Step inside and you'll find a purpose-built cockpit designed for the ultimate driving experience, with a minimalist yet luxurious design. Don't miss your chance to own a piece of automotive history, come test drive the McLaren Senna GTR today.",
                mileage: 56,
                bodyType: "Coupe",
                vin: "DTY7UF5YRU6TF",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/fe979c03-7945-437e-8b6e-41443ddef3df/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/c8c322b2-398e-44b8-bce8-e18555dac663/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/7c87095f-acc8-490d-a810-6fe2d16fa7c1/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/6cdb3790-daea-4ae8-9cf4-be0711869809/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/35ed31e4-eafa-4045-8aa9-9b6a1c242c48/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/af58f765-b429-4244-a9fa-d55fbf057250/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/c1567a71-7e9d-4e25-9ebe-3e9790c78639/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2020/07/13/15/09/21/f626cff4-3168-4890-ad43-2d1191d819b6/je/768xxsxm.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "765LT",
                year: 2021,
                price: 618899,
                description: "The McLaren 765LT is a limited-edition supercar that boasts a powerful 765 horsepower engine and lightweight construction. This car is built for speed and performance, with a top speed of over 200 mph and acceleration from 0-60 in just 2.8 seconds. The car features unique aerodynamic design, including a new front splitter, side sills, and rear diffuser that work together to increase downforce and improve handling. The 765LT also features a custom suspension and braking system, as well as advanced carbon ceramic brakes. The interior is designed for the ultimate driving experience, with a driver-focused cockpit, racing seats, and high-tech digital displays. This car is a true masterpiece of engineering and design, and is a must-have for any serious car collector or enthusiast.",
                mileage: 2015,
                bodyType: "Coupe",
                vin: "D64R75TUDRYTUF",
                exteriorColor: "Blue",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/8114f640-38c3-4d7e-b8da-2a2d5067ed92/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/27579608-27b4-44a9-b0b5-dea502a761c7/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/ea83e2e8-1809-46c5-81b8-509aed58295f/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/6aed671b-35cf-4a7e-bb53-80c3783aeef4/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/c46e9359-7d45-4e4d-aa39-aa4c7dc45179/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/356d979d-88b0-4614-9429-d75eb7b387d6/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/84e6cf10-421c-4a01-8074-fb03cb12691f/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/13/15/25/15/d663e5d7-104d-4932-ae64-94deefe53741/je/768xxsxm.jpg"
            });
            await createMcLaren({
                make: "McLaren",
                manufacturerId: 6,
                model: "GT",
                year: 2022,
                price: 244295,
                description: "This 2022 McLaren GT in McLaren Orange over Vintage Tan . This McLaren GT features a 4.0L Twin Turbocharged V8 with a Dual Clutch Transmission. Installed Options Include: 10 Spoke Lightweight Forged Wheels Finished in Gloss Black Key Painted in McLaren Orange McLaren Orange Calipers with Silver Logo Carbon Ceramic Brakes Vehicle Lift Front and Rear Parking Sensors Practicality Pack Premium Pack P22 Luxe Luggage Bay Sides in Vintage Tan Leather Luggage Bay Floor in Jet Black Superfabric Tan Leather Seats Luxe Design Vintage Tan Natural Titanium Exhaust Finisher Sports Exhaust Panoramic Privacy Glass Roof Bowers and Wilkins Audio System",
                mileage: 1050,
                bodyType: "Coupe",
                vin: "SDF5G67NUGH",
                exteriorColor: "Orange",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/130648af-86ea-40b9-91cf-1c2d9ead1eb0/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/16/15/58/03/15e27142-4a1f-4b94-a1f4-66878cb5e9af/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/6e759ed1-95f4-46df-acd5-d88320095d6c/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/16/15/58/03/55ab53b9-f27e-41de-808c-01cc550c23e1/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/7c0b4595-c614-4dda-8a01-dba4bc62d39d/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/54dc6c0d-2b16-4b5a-a499-01467e72758f/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/16/15/58/03/ec992d3d-1e63-4ad0-b177-d779402533a4/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/20/15/19/45/8881b319-903d-4ecb-80e9-e91defdb073d/je/768xxsxm.jpg"
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
                model: "Carrerra GT",
                year: 2005,
                price: 2117270,
                description: "The Porsche Carrera GT is a high-performance sports car that was produced by Porsche between 2004 and 2007. Only 1,270 units were produced, making it a highly sought-after vehicle among car enthusiasts. The Carrera GT features a 5.7-liter V10 engine that produces 605 horsepower and 435 lb-ft of torque. It can accelerate from 0-60 mph in just 3.5 seconds and has a top speed of 205 mph. The car also features a ceramic composite brake system and a lightweight carbon fiber body. The interior of the Carrera GT is fitted with leather and carbon fiber accents, and the car's design is heavily influenced by Porsche's motorsport heritage. This is a rare opportunity to own a piece of Porsche history. Don't miss out on this chance to own the ultimate driving machine.",
                mileage: 25049,
                bodyType: "Cabriolet",
                vin: "D6F5TYGS54D6FS",
                exteriorColor: "Black",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/53/c39366fe-bc59-4c14-a9bf-60eeeaed0e5a/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/59/4ccbdae2-446c-4b53-ba09-887ccc2d3906/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/53/669f43b0-53aa-4b3e-ae07-8c736afd88ae/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/53/9cfd7ce7-03a0-48b1-b6e0-996190e93d4d/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/53/1a527dd9-d699-4530-8aff-c43ff6e37938/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/59/b750b89d-b387-4d86-8808-2c1a22d37042/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/59/7c43853b-c593-4a40-9e67-9ce294800668/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/05/12/09/25/53/3e35aaa7-e388-47ab-9295-884f4111c3b7/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "991 GT3",
                year: 2023,
                price: 249729,
                description: "Introducing the Porsche PP1 GT3 - the ultimate track machine. This limited edition vehicle is designed for true driving enthusiasts, featuring a 4.0-liter flat-six engine that delivers an astonishing 700 horsepower and 530 lb-ft of torque. The lightweight design, advanced aerodynamics, and advanced suspension make this car a true performer on the track. The PP1 GT3 also comes equipped with a six-speed manual transmission and rear-wheel drive, providing the driver with an unparalleled level of control and precision. The exterior features a sleek and aggressive design, complete with a fixed rear wing and a front splitter for optimal downforce. The interior is equally impressive, with a minimalist yet luxurious design featuring carbon fiber racing seats, a motorsport-inspired steering wheel, and advanced instrumentation. Only a limited number of these vehicles will be produced, so don't miss your chance to own one of the most sought-after Porsche models on the market. Contact us today to schedule a test drive and experience the thrill of the PP1 GT3 for yourself.",
                mileage: 50,
                bodyType: "Coupe",
                vin: "NHBTYGVUICRCDF",
                exteriorColor: "Yellow",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/d8009916-5562-493d-a686-c01e7c6b7a2f/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/b61df7e6-8d47-4bc4-a45a-1d0a196112ad/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/7515def3-9710-43c0-8f1b-093925e014f9/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/77668cd6-4edf-415c-8c2b-489b169cd4c5/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/ea3771e4-1509-4bfb-b866-cfd625297cc4/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/c895cf94-e8fb-4bd9-8bc3-2c181d2c36ad/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/e673da83-f905-479e-b6e3-342638ae7dd1/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/17/18/18/31/ecc36c6d-220b-4245-8439-4c5b470098ad/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "991 Prototype GTE Le Mans",
                year: 2021,
                price: 2225848,
                description: "Introducing the 1991 Porsche 991 Prototype GT Le Mans, a truly one-of-a-kind vehicle for the ultimate car enthusiast. This prototype was built to compete in the Le Mans race and has been meticulously maintained to ensure it is in top running condition. With a sleek and aerodynamic design, this car is sure to turn heads on the track or on the streets.  Under the hood, the 991 Prototype GT Le Mans is powered by a 3.2-liter flat-six engine that produces a staggering 600 horsepower. This, paired with its lightweight carbon fiber body, allows the car to reach top speeds of over 200 mph. The car also features advanced suspension and brake systems, providing exceptional handling and control.  The interior of the 991 Prototype GT Le Mans is just as impressive as the exterior. It features a state-of-the-art cockpit with a digital instrument cluster, a racing steering wheel with paddle shifters, and high-performance racing seats. The car also has a roll cage for added safety and protection.  This is your chance to own a piece of racing history. The Porsche 991 Prototype GT Le Mans is a limited-edition vehicle and is highly sought-after by collectors. With only a few examples in existence, this car is sure to be a valuable investment. Don't miss out on the opportunity to own a true racing legend. Contact us today to schedule a test drive and experience the thrill of the 991 Prototype GT Le Mans for yourself.",
                mileage: 8122,
                bodyType: "Coupe",
                vin: "J56H7UG8FID",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/b2d295bf-dc57-4172-a4e8-cb060ad9a7b8/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/46006af7-98a9-43a2-ae09-869a2baa3c23/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/aa677972-dd1f-4e4c-8219-58008677c823/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/7085303b-d1e8-48e4-b674-cd972ba1b5a7/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/be38364d-cd9a-4f06-bcaf-2215c17eb912/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/e563c1c8-9488-4269-9e2c-2db5143a0211/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/54ba5661-5af3-4331-a5c9-f5b5b74eb03d/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/10/17/12/20/25/aa677972-dd1f-4e4c-8219-58008677c823/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "Taycan GTS",
                year: 2023,
                price: 126484,
                description: "Introducing the all-new Porsche Taycan, the ultimate electric sports car. This sleek and powerful vehicle is designed for those who demand the best in performance and luxury. With its state-of-the-art electric powertrain, the Taycan delivers instant torque and acceleration, propelling you from 0-60 in just 3.2 seconds. The advanced battery technology provides an impressive range of over 300 miles, perfect for long distance driving. Inside, the Taycan is a masterpiece of design and technology. The spacious and comfortable cabin is outfitted with the latest Porsche Communication Management system, featuring a large touchscreen display and voice control. The premium leather seats are heated and ventilated, providing optimal comfort in any weather. The panoramic sunroof floods the cabin with natural light, creating an open and airy atmosphere. Externally, the Taycan’s sharp lines and aerodynamic design create a bold and sporty appearance. The LED headlights and taillights provide excellent visibility, while the 21 inch wheels enhance the car’s aggressive stance. Experience the future of performance driving with the Porsche Taycan. Visit our dealership today to test drive this revolutionary vehicle.",
                mileage: 55,
                bodyType: "Sedan",
                vin: "T56Y7UI8SDCF",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/636dd65d-6197-4291-8116-fbfff4c51c36/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/2c55743e-d42f-492a-9e71-7d025f0fe870/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/a358cc93-ea45-4d59-acb2-00cd6b2815ce/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/6541f51f-cc0e-48bb-9a0d-2b74b2ee2d58/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/fc3cb751-a35e-4dc3-ba12-1bc95c6e3198/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/3056186d-c6e2-4ca7-8011-014512cc6a2e/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/3a8792eb-e64a-4fc1-9b0b-a2e32525ab69/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/f889ee49-d78d-4992-9155-8d54524e1f63/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "935",
                year: 2023,
                price: 2171559,
                description: "Introducing the Porsche 935, a limited edition track-focused sports car that pays homage to the legendary 935 race car of the 1970s. With only 77 units produced worldwide, this car is sure to turn heads and be a highly sought-after collector's item. Under the hood, the 935 is powered by a 3.8-liter flat-six engine that generates 700 horsepower and 553 lb-ft of torque. This power is sent to the rear wheels through a 7-speed PDK transmission, allowing for a 0-60 mph time of just 2.5 seconds and a top speed of 211 mph. The 935 features a sleek and aerodynamic design, with a wide body kit and a massive rear wing that provide optimal downforce and stability at high speeds. The car sits on center-locking 20-inch wheels with Michelin Pilot Sport Cup 2 tires for maximum grip. The cabin features a minimalist design with race-inspired seats and a digital instrument cluster.  The Porsche 935 is the ultimate track machine for the Porsche enthusiast looking for an exclusive and incredibly rare driving experience. With only 77 units available, this is your chance to own a piece of Porsche history.",
                mileage: 61,
                bodyType: "Coupe",
                vin: "SDCF67U8ISDC",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/4a571c24-4eea-464c-8b84-755030d89893/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/2f37a6c7-3f1b-40e8-a80b-0fdc487b2ab8/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/ab939e0c-caea-45f9-98e0-5998134cdecb/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/62792976-a78e-44f4-8d51-f1bfdc14cfc9/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/69c0fb7e-eb5c-4c0f-ac4a-86f3e4dab59e/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/c6762e58-6ed7-4103-aee7-8e37e9385898/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/10e660cf-9bd9-4262-b0ec-94de7192701d/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2021/12/22/17/31/53/5d7c0524-17b6-4ac4-bdf0-a24a56687dfb/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "918 Spyder",
                year: 2015,
                price: 1578814,
                description: "Introducing the Porsche 918, the ultimate hybrid supercar from the renowned German automaker. With its sleek and aerodynamic design, this vehicle is sure to turn heads on the road. Under the hood, the 918 boasts a 4.6-liter V8 engine paired with electric motors for a combined output of 887 horsepower. This allows the car to go from 0 to 60 mph in just 2.5 seconds and reach a top speed of 214 mph. The 918 also features advanced technology such as Porsche's Dynamic Chassis Control, rear-wheel steering, and torque vectoring, which all work together to provide unparalleled handling and performance. Inside, the 918 offers a luxurious and high-tech cabin, with premium leather seats, advanced infotainment system, and a host of driver assist features.  This is a limited-edition model and only a few units were produced, making it a true collector's item. If you're in the market for a supercar that combines power, style, and innovation, the Porsche 918 is the one to have. Don't miss out on this opportunity to own a piece of automotive history. Contact us today to schedule a test drive and experience the 918 for yourself.",
                mileage: 3177,
                bodyType: "Convertible",
                vin: "DCFV6GY7U8ID",
                exteriorColor: "Yellow",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/0176407d-3361-4ac7-ad9a-16ce2fa75510/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/48b1d61d-d667-4d33-9483-085c44b17457/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/d1d7dfe7-f2a0-4a4b-9f1c-9287cde59e15/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/18945852-0449-4ce2-9995-f64ba0476566/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/500c51ed-3fd4-4860-8b2e-d20894f8ae5e/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/3efe90e2-8e7d-467d-8bc9-361a3a6b3a4b/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/d5d13510-ac02-48f5-9202-0922807857d9/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/af8aa633-837f-440a-bc76-b739145640fd/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "911 GT3 RS",
                year: 2023,
                price: 632000,
                description: "Introducing the Porsche 911 GT3 RS, a high-performance sports car that combines raw power and precision engineering. This car boasts a 4.0-liter flat-six engine that produces a staggering 520 horsepower and 346 lb-ft of torque, giving it the ability to go from 0-60 in just 3.2 seconds. The 911 GT3 RS also features a lightweight design and advanced aerodynamics, making it a masterful performer on the track. The interior is just as impressive as the exterior, with comfortable leather seats, a state-of-the-art infotainment system, and a host of advanced driver assistance features. This is a car that is built for speed and performance, and it delivers on both in spades. Come test drive the Porsche 911 GT3 RS today and experience the ultimate in high-performance driving.",
                mileage: 918,
                bodyType: "Coupe",
                vin: "RTYU7I8DFGDG",
                exteriorColor: "White",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/01/16/53/17/2a64c0b8-8448-4978-9443-9b65279959f5/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/01/16/53/18/4168d096-2911-4004-8a9c-7f1339735522/je/768xxsxm.jpg",
                imageThree: "https://www.cnet.com/a/img/resize/ef5d29255a918d8173edb5e062d67e6a38ba3db2/hub/2022/08/19/325c58ec-3f00-44c6-b886-661b74599083/ogi1-porsche-911-gt3-rs-white-green-002.jpg?auto=webp&fit=crop&height=675&width=1200",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/01/16/53/17/3de183cd-79f7-4478-b3fb-3f34a010487d/je/768xxsxm.jpg",
                imageFive: "https://www.cnet.com/a/img/resize/593524024e02d4e2ada208e99dffa9e508d1acf6/hub/2022/08/19/4b50770a-e10e-4203-9caa-7e81c4323d75/porsche-911-gt3-rs-white-green-001.jpg?auto=webp&fit=crop&height=299&width=532",
                imageSix: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_700x395/dam/pnr/2022/Products/911-GT3-RS-Tribute/gallery/2023_911_GT3RS_Monterey_Show_Car_039_.jpeg/jcr:content/2023_911_GT3RS_Monterey_Show_Car_039_.jpeg",
                imageSeven: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2023-911-gt3rs-monterey-show-car-046-1660914611.jpg",
                imageEight: "https://www.topgear.com/sites/default/files/2022/09/2023_911_GT3RS_Monterey_Show_Car_007_.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "356",
                year: 1953,
                price: 357224,
                description: "Introducing the 1953 Porsche 356, a classic and iconic sports car from the early days of Porsche. This particular model has been fully restored to its original condition, featuring the classic body design with curved lines and a sleek, aerodynamic look. The 356 is powered by a flat-four engine, producing a thrilling driving experience. The interior features a minimalist design, with leather seats and a wood-rimmed steering wheel. The car also features a 4-speed manual transmission, perfect for a true driving enthusiast. This is a rare opportunity to own a piece of Porsche history, and a must-have for any collector. With only a limited number of these cars produced, don't miss out on the chance to own this piece of automotive history. Contact us today to schedule a test drive and experience the Porsche 356 for yourself.",
                mileage: 3444,
                bodyType: "Cabriolet",
                vin: "K7J6YHT5GUYT",
                exteriorColor: "Black",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/2a83cf4e-fa6c-49d2-b388-3d22a5a9f86f/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/bb52efd8-9081-4650-b8cb-d1a777e5b0c0/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/5bbd663f-4bb4-45f3-b15d-ea1417b96666/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/09cc0eee-1596-4fd5-ab91-fe32182295bf/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/2a4e2296-6c11-4b2a-84c8-31a004cb3050/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/0521edc8-c863-4463-9984-9de6047dcf8f/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/126d5bfa-064d-455b-aa9c-304308d15050/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/09/42100af2-0bdb-45a6-87e0-1e737e1849ae/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "911 Targa 4S Heritage Design Edition",
                year: 2021,
                price: 989,
                description: "Introducing the Porsche 911 Targa 4S Heritage Design Edition, a timeless masterpiece that pays homage to the iconic 911 models of the past. This limited edition vehicle is sure to turn heads with its striking color scheme, featuring a classic white exterior with a red and black stripe running along the hood, roof, and trunk. Under the hood, you'll find a powerful 4.0L flat-six engine that produces 443 horsepower and 390 lb-ft of torque, allowing you to reach top speeds of up to 191 mph. The 7-speed manual transmission ensures a smooth and responsive driving experience, while the Porsche Active Suspension Management system keeps you firmly planted on the road. The Heritage Design Edition also features a host of special design elements, such as the 'Heritage Design' script on the engine cover, a 911 badge on the rear lid, and classic Fuchs-style wheels. The interior is just as impressive, with leather and houndstooth upholstery, aluminum door sills, and a leather-wrapped steering wheel   With only 991 units produced worldwide, this is your chance to own a piece of Porsche history. Visit our dealership today to test drive the Porsche 911 Targa 4S Heritage Design Edition and experience the ultimate driving machine.",
                mileage: 918,
                bodyType: "Cabriolet",
                vin: "98765TBVRRFRGF",
                exteriorColor: "Red",
                interiorColor: "Brown",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/27/15/52/32/68377c67-801d-4f68-9a68-ee39b0a56542/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/de01b750-7b0b-4641-a0d3-69cc3b7d8dc4/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/b0965c4f-db11-445e-adcc-6864322fb814/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/a9178bec-eaac-4af7-81ee-364ca1bc8b94/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/447f7e01-46fb-4c7c-94ac-434c260a69d2/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/bdec8a92-871a-4459-be8a-e31066a29b3d/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/828b2641-0fff-4921-9a01-972949bd2206/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/49/b708dfbe-a12e-42a4-b88c-0d77ec0e8dbf/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "964",
                year: 1991,
                price: 189681,
                description: "Example of 2014 Porsche 918 Spyder",
                mileage: 145620,
                bodyType: "Coupe",
                vin: "YTIYRUKEGRHTGJ",
                exteriorColor: "White",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/38/38ecbfb7-0e61-4cb2-93c7-c3b5602f1b7d/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/32/d95b92f8-a664-4c18-afca-1cde9136d11d/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/38/d6fa7516-17fb-4732-a585-7433bc481768/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/34/6ab4da71-b2a6-4818-8cff-bde0fedd0a44/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/34/66d14524-c463-477a-a3b4-edea8bb044bf/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/32/7d2cb29a-2a12-4b7c-bfca-8fb340c459bc/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/32/f3eed277-79cd-4289-9420-6b0f026ef559/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/02/04/11/43/32/2c2cc7ee-2508-4195-8adf-c41e75cc8881/je/768xxsxm.jpg"
            });
            await createPorsche({
                make: "Porsche",
                manufacturerId: 7,
                model: "911",
                year: 1970,
                price: 183496,
                description: "Introducing the 1980 Porsche 911, a true classic in the Porsche lineup. This iconic sports car has been carefully maintained and is in excellent condition. The body is finished in a classic Guards Red paint, and the black leather interior is in great shape with minimal wear. Under the hood, you'll find the 3.6L flat-six engine, paired with a 5-speed manual transmission. This combination provides for a thrilling driving experience. This 911 features the desirable G50 transmission and limited-slip differential, making it a great option for the car enthusiast who wants to experience the raw and unbridled power of a true sports car. With only 48,000 miles on the odometer, this Porsche 911 is a rare find and a must-have for any Porsche collector or enthusiast. Don't miss out on the opportunity to own a piece of automotive history.",
                mileage: 8,
                bodyType: "Convertible",
                vin: "8MY7NT6V5GGR",
                exteriorColor: "Red",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/7ae2f0a1-bcbd-4257-8798-4fbcce5a82ad/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/7ae2f0a1-bcbd-4257-8798-4fbcce5a82ad/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/64ef6952-f4c5-4b67-bc85-8c398b2d7a0d/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/8017c61d-aef8-4873-a10b-74ce869f0bbb/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/05e47166-1840-4f2c-8702-3a30fd5a45a3/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/ee150262-f361-457c-a08e-59741d4328d0/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/b492dd73-1108-4719-9bfd-133c31c3ce6a/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/09/19/16/11/32/5345e189-d2e9-4879-aa5d-375404a4fd04/je/768xxsxm.jpg"
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
                model: "Cullinan",
                year: 2022,
                price: 762045,
                description: "Introducing the ultimate luxury SUV, the Rolls-Royce Cullinan. This majestic vehicle exudes opulence and class from every angle, with its sleek exterior design, spacious and sumptuous interior, and unmatched driving performance. Under the hood, the Cullinan is powered by a 6.75-liter V12 engine that delivers a staggering 563 horsepower and 627 lb-ft of torque, allowing you to conquer any terrain with ease. The vehicle also comes equipped with all-wheel drive and an advanced air suspension system that ensures a smooth and comfortable ride, no matter the conditions. Inside, the Cullinan is a true masterpiece of craftsmanship. The interior is finished with the finest materials, including premium leather seats, wood veneers, and polished metal accents. The spacious cabin is designed to provide maximum comfort, with ample legroom and headroom for all passengers. The vehicle also comes equipped with state-of-the-art technology, including a touchscreen infotainment system, a premium sound system, and advanced driver-assist features. The Cullinan also features a unique 'Viewing Suite' that allows passengers to enjoy the views from the back seat, with two rear-facing leather seats that pop out of the trunk. With its unparalleled luxury, performance, and versatility, the Rolls-Royce Cullinan is the ultimate choice for those who demand the very best in life. If you're in the market for a luxury SUV, don't miss the opportunity to test drive this magnificent vehicle today.",
                mileage: 0,
                bodyType: "SUV",
                vin: "RT5Y67MN6YT5B",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/5ffbf79c-6f36-4169-925f-67eeec4708ce/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/bce68a3f-cc99-48c7-8804-1c390158841c/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/9867c313-03b7-42bd-b6a0-8ccb3c30869c/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/de34058c-67b6-4cab-bdec-69daacb29e8f/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/9e59cadf-9fd2-4a49-be0e-08b3de70f569/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/f89e657a-f2d6-4488-b54c-94b7cae6babe/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/6913e84c-ea7a-4575-89bb-39a403da8acd/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/6048a323-c6f1-4cc4-9fa3-990a3050580b/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Cullinan",
                year: 2020,
                price: 745709,
                description: "Introducing the all-new 2020 Rolls-Royce Cullinan, the ultimate luxury SUV. This one-of-a-kind vehicle boasts a powerful 6.75-liter V12 engine and an 8-speed automatic transmission, providing an effortless and smooth driving experience. The exterior exudes elegance and sophistication with its sleek lines, advanced LED lighting, and 21-inch alloy wheels. Inside, the Cullinan is a true sanctuary of luxury, featuring sumptuous leather seats, a panoramic sunroof, and state-of-the-art technology including a touchscreen infotainment system and advanced driver assistance features. The spacious cabin offers ample room for up to five passengers, making it the perfect vehicle for both business and leisure. The Cullinan also offers a unique feature of a rear-seat entertainment system and a rear-seat refrigerator compartment. With its unmatched luxury, unparalleled performance, and cutting-edge technology, the Rolls-Royce Cullinan is the ultimate expression of luxury motoring.",
                mileage: 2852,
                bodyType: "SUV",
                vin: "N6T5R4FU7NY6BT5",
                exteriorColor: "White",
                interiorColor: "Blue",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/39/b183d0d1-b88d-429f-85b9-d657f97079e2/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/39/e7c0d6a5-b93f-43b5-a928-ef1b7fcbf1e1/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/37/6ab3c923-9bb2-418f-9cc8-2c2adabaa8ed/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/37/f3e8f357-fffe-4260-89b4-7389db8e2ca9/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/39/9d52e015-2dc8-4529-b48e-3597a5969d92/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/39/75363b1b-2da1-4a54-a78a-3daf647bdce2/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/37/69a07717-d564-4d97-b09e-0a728c9bccbd/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/06/30/09/56/38/29666b16-0010-46f6-a4a3-f89d998a7295/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Ghost",
                year: 2021,
                price: 576499,
                description: "Step into luxury with this stunning blacked out Rolls-Royce Ghost. The sleek exterior features a custom blacked out wrap that gives this car a sleek and sophisticated look. The blacked out theme continues on the inside with black leather seats and piano black accents on the dashboard and steering wheel. The car is powered by a 6.75L V12 engine that delivers an impressive 563 horsepower and 605 lb-ft of torque. The Ghost also comes equipped with a number of advanced technologies such as adaptive cruise control, a heads-up display, and a 360-degree camera. This car is perfect for anyone looking to make a statement and experience the ultimate in luxury and performance. Don't miss out on this one-of-a-kind blacked out Ghost.",
                mileage: 12411,
                bodyType: "Sedan",
                vin: "S6DCYFUV7GBIN",
                exteriorColor: "Black",
                interiorColor: "White",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/8c1d7cf0-aff0-441c-a521-166df3d0a6a3/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/9d0382cd-c4b5-4e59-877d-bc1f7ee3a4a0/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/19e61847-ea5e-4746-90ef-7b142d47c128/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/27678fe4-b9cc-4e66-a93d-c32c141ddf80/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/d2c60dc8-dcb5-4a7e-8381-7870ea3a5af0/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/dfa3e309-7e1b-47bf-b055-c2f079ede5c4/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/c586a8d8-a6b6-49f3-a5f1-82cb5063f317/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/11/11/16/08/48/f02e4c42-2892-4cb8-b88b-03a015751f9a/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Wraith",
                year: 2018,
                price: 299951,
                description: "Introducing the Rolls Royce Wraith, the ultimate luxury grand tourer. This sleek and powerful vehicle boasts a 6.6L V12 engine that delivers an exhilarating driving experience. The exterior is finished in a striking black finish, accented by sleek chrome details and 21 inch wheels. Inside, the cabin is adorned with the finest leather and wood finishes, providing an opulent and comfortable ride. The Wraith features advanced technology including a 8.8 inch high resolution touchscreen display and a state-of-the-art sound system. With its striking design and unparalleled luxury, the Rolls Royce Wraith is the perfect vehicle for those who demand the very best in performance and comfort. ",
                mileage: 17568,
                bodyType: "Coupe",
                vin: "Z6XYC7UVIB8NM",
                exteriorColor: "Grey",
                interiorColor: "Black",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/b97b99ee-066a-4147-b782-10bc9a132cf3/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/5e104f1f-1bfb-413a-8c92-34ca00bd9c84/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/c051ffe8-5677-4646-932e-ee542457c29f/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/ac67c94e-c7ef-4869-84f9-15d1911b4fab/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/ecb538c2-ae89-4e39-95e7-51725b263c7c/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/c87f2176-cddc-48f1-9310-9be156efb22e/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/241baa64-de91-4895-aa33-7af543fcecf2/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/22/15/17/17/15f60112-3263-4033-91dd-e642e2373c55/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Phantom VIII",
                year: 2021,
                price: 625917,
                description: "Introducing the ultimate luxury vehicle, the Rolls Royce Phantom. This majestic car boasts a sleek and sophisticated design, with a powerful 6.75-liter V12 engine that delivers an effortless and smooth ride. The Phantom's exterior is finished in a striking black paint job, accented by chrome accents and 21-inch wheels, giving it a truly commanding presence on the road. Inside, the Phantom's cabin is a haven of luxury and comfort, with hand-crafted leather seats, exotic wood veneers, and state-of-the-art technology. The Phantom also features the latest in driver assistance technology, including a heads-up display, lane departure warning, and a 360-degree camera. Experience the epitome of luxury and style with the Rolls Royce Phantom.",
                mileage: 66,
                bodyType: "Sedan",
                vin: "Q4W5EDFY6UVG",
                exteriorColor: "White",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/39/78718c60-4da5-4282-901f-ec60e738db3e/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/40/57efe692-5936-4e80-a101-366661fecc49/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/39/b79bd59f-5db8-451c-8ef7-cb1399e68e3e/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/40/955c96ce-f761-4da0-afde-c7b10fa697df/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/47/5b65e7b6-e0c6-4659-94cc-b1aecff584b4/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/48/7ca763e6-537c-4f29-b23c-b204ee530b28/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/48/8256b02f-bc4d-45c2-8b61-7f3b06126032/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/07/26/09/24/48/673b9ff6-f097-4f21-a2e1-2d142d0435bc/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Black Badge Dawn",
                year: 2018,
                price: 376485,
                description: "Introducing the Rolls Royce Dawn Black Badge, a limited edition luxury convertible that exudes elegance and class. The sleek black exterior paint job is accented by dark chrome detailing, giving the car a bold and sophisticated look. The interior is equally impressive, featuring black leather seats with contrasting white stitching, and a black leather dashboard. The car is powered by a 6.6L V12 engine that delivers 563 horsepower and 605 lb-ft of torque, allowing for a smooth and powerful driving experience. The car is equipped with a host of advanced technology, including a satellite navigation system, front and rear parking sensors, and a premium sound system. With only a limited number of these cars available, the Rolls Royce Dawn Black Badge is the ultimate expression of luxury and exclusivity.",
                mileage: 2855,
                bodyType: "Cabriolet",
                vin: "SRETYUS4EDX54G",
                exteriorColor: "Black",
                interiorColor: "Blue",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/84fc2f1e-3cbe-450d-85ae-8ffd2791b58d/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/2dcde551-2ffc-470d-9629-751d029a7638/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/d27f5d89-a1e0-404e-aee1-d18a61040020/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/f2b36732-3372-4444-944b-acc56b3f1021/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/94b18081-6833-45b6-bef0-7bb5c1381542/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/41fa72f3-dca5-401c-b1d8-5d0f0b27cdd7/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/7d081c8a-3798-4336-b7b2-2e5fc62e40d5/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/05/24/14/16/34/4d66666a-636b-4231-867f-045f7d6ffaf1/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Black Badge Wraith",
                year: 2018,
                price: 267849,
                description: "Introducing the Black Badge Wraith, a limited edition luxury vehicle from Rolls-Royce that exudes power and sophistication. This stunning car is painted in a sleek black exterior, giving it a bold and mysterious presence on the road. The Black Badge Wraith is powered by a 6.6-liter V12 engine, producing 624 horsepower and 605 lb-ft of torque, allowing it to reach 0-60 mph in just 4.4 seconds. The car features an advanced suspension system that provides a smooth and effortless ride, making it the perfect car for long drives and grand tours. The interior is adorned with the finest materials, including hand-stitched leather seats and a customizable starlight headliner. The advanced technology, including a heads-up display and wireless charging, ensures that you stay connected and comfortable at all times. With only a limited number produced, owning a Black Badge Wraith is a true statement of exclusivity and luxury. Don't miss your chance to own one of the most sought-after cars in the world.",
                mileage: 13346,
                bodyType: "Coupe",
                vin: "B37N6HB5GGV",
                exteriorColor: "White",
                interiorColor: "White",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/d96ca7db-8f9c-4865-817e-b2dc919a34cf/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/6eb95a8a-3f75-40d0-b269-e7fbce4be44f/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/63101fa8-b3ac-462b-94e9-c2a196ae5a64/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/feeefbfe-fef6-4e7e-ba6c-7592497b4beb/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/c0168ab6-707e-4b8a-b673-03f26fdbc4d7/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/3d5c0625-e236-4317-87b9-aa909edf49a5/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/5ea8aabc-fec7-4530-8684-2335c007a4aa/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/09/08/14/26/39/dcaef26a-ce00-46fb-a05f-2746e0d11180/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Black Badge Wraith",
                year: 2019,
                price: 298749,
                description: "Introducing the ultimate luxury driving experience, the Black Badge Wraith from Rolls-Royce. This exclusive edition of the iconic Wraith model has been expertly crafted to deliver an unparalleled level of style and performance. The sleek black exterior is complemented by a host of blacked-out features, including the iconic Spirit of Ecstasy, grille, and wheels, making this the most striking and powerful Wraith yet. Under the hood, the 624 horsepower V12 engine provides an exhilarating driving experience, while the advanced suspension and active roll stabilization ensure a smooth and effortless ride. Inside, the cabin is bathed in luxury, with sumptuous leather, piano black veneers, and a host of cutting-edge technologies. With only a limited number of Black Badge Wraiths available, this is your chance to own a truly unique and exclusive Rolls-Royce.",
                mileage: 3121,
                bodyType: "Coupe",
                vin: "8JKI7UM66NT",
                exteriorColor: "Black",
                interiorColor: "Blue",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/02/25/16/05/47/5d1ddc15-1429-418f-bd36-b3919d3649e2/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/02/25/16/05/47/901189be-9374-4d7e-9eff-59d219846974/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/02/25/16/05/47/ffb02cfe-172f-43f8-8094-b93017dc97dd/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/02/25/16/05/47/7a45f368-0a2d-49b4-9f40-a341d1f1c2ae/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/06/25/18/29/36/a9ed2c35-86d8-4eaa-9575-dfc18387708f/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/06/25/18/29/36/b236124e-71c5-44a6-93dd-b9b25b7f3a01/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/02/25/16/05/47/bc1e03b4-81ff-4fd6-beb9-3315ca989da1/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/02/25/16/05/47/c910e430-a2bb-4f74-945d-3b07450f007f/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Cullinan",
                year: 2021,
                price: 266489,
                description: "For those seeking the ultimate luxury SUV experience, look no further than the Rolls-Royce Cullinan. This sleek and stylish vehicle features a powerful 6.75-liter V12 engine, capable of accelerating from 0-60 in just 5.2 seconds. The exterior is coated in a sleek black finish, paired with a striking set of 22-inch black wheels. The interior is equally impressive, with plush leather seats, a state-of-the-art infotainment system, and an array of advanced driver assistance features. Whether you're taking a leisurely drive through the countryside or embarking on an off-road adventure, the Cullinan is the perfect choice for those who demand the very best.",
                mileage: 6641,
                bodyType: "SUV",
                vin: "N56J6YM6TJYT66H",
                exteriorColor: "White",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/febd43bb-bdeb-4e73-be52-a5b98817b344/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/b616c3e5-8f07-4d01-8482-2fd85391fc9c/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/20ad37e3-ab82-409e-aba5-98335ece5bcc/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/fa43ac89-6552-4399-84b9-4c3279dc41d3/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/fd14e285-48d2-49bc-9a43-029b364fb97b/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/0c544005-5933-4e06-b5fb-5e31f58c7903/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/e52d150f-3630-48a6-9978-c190ab69332e/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/20/12/21/56/a2f9d40b-b2d1-4ea7-bf5f-f535ac9e5826/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Black Badge Dawn",
                year: 2018,
                price: 316494,
                description: "Introducing the stunning White Black Badge Dawn with Red Interior. This luxury vehicle exudes sophistication and class with its sleek white exterior and bold red interior. The Black Badge package adds an extra layer of exclusivity with its dark, menacing aesthetic. The car is powered by a powerful V12 engine, capable of reaching top speeds and delivering a smooth, exhilarating driving experience. The interior is fully-loaded with state-of-the-art technology, including a fully-digital instrument panel and an infotainment system with navigation. The car also features a panoramic sunroof, allowing for an immersive driving experience. The red interior adds a pop of color and sporty flair to the already opulent cabin. This is truly a car for the discerning driver who demands the very best in luxury and performance. So, if you want to make a statement on the road, this is the car for you.",
                mileage: 8489,
                bodyType: "Cabriolet",
                vin: "UJY5H4567N5JN",
                exteriorColor: "White",
                interiorColor: "Red",
                doors: 2,
                imageOne: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/024214a1-6c40-4938-b6fd-3138c541dd18/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/5c833655-b293-426a-9d0d-1b2736dfb827/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/ca6b8ce6-26cd-4dc2-b6af-06114db16926/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/dd1afe08-afa7-4bef-8625-d095c4dcce94/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/122d1331-b0ea-4dfd-91e9-b8295b68911e/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/197c7b64-95c6-4103-ba5a-a3c55171e69b/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/ce5d9af9-ecad-461a-908a-f158e486b2a7/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/06/28/17/34/27/549608c3-8558-429f-b085-6eb57ef72a93/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Phantom VIII",
                year: 2023,
                price: 769494,
                description: "Introducing the Rolls-Royce Phantom, a true masterpiece of luxury and craftsmanship. This iconic vehicle boasts a sleek and timeless design, with a powerful 6.75-liter V12 engine that delivers an effortless and smooth ride. The Phantom's interior is a work of art, with sumptuous leather seats, intricate wood veneers, and state-of-the-art technology that creates a truly immersive driving experience. The Phantom's advanced suspension system ensures a comfortable and quiet ride, while the advanced safety features provide unparalleled peace of mind. This is the ultimate in luxury motoring, a car that will turn heads and make a statement wherever it goes. Come test drive the Phantom today and experience the pinnacle of luxury for yourself.",
                mileage: 8489,
                bodyType: "Sedan",
                vin: "GHTYJ5H46MU5YH",
                exteriorColor: "Black",
                interiorColor: "Orange",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/ecd1ed2e-8f3a-4177-8065-d03bb09f2e72/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/45c6fceb-0daf-46ca-95f9-d42de713e17c/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/c6fbd2c1-cd35-4beb-8da5-a0db6cb60e81/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/cfd9a82e-a1d8-45d3-82bd-de882bdacc1b/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/ad8b2445-b11c-4ddc-989a-6b7a52382da5/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/a7021e8a-6b0d-47a6-995e-f6f8e5e33200/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/9033db4c-6ab2-42c6-8fff-69b76b9026c8/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/8763502a-34bf-4f83-859b-ad353bf4a1ea/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Cullinan",
                year: 2020,
                price: 707954,
                description: "Introducing the Rolls Royce Cullinan, the ultimate luxury SUV. With its sleek and powerful exterior, this vehicle commands attention on the road. The Cullinan features a 6.75-liter V12 engine that delivers an impressive 563 horsepower and 627 lb-ft of torque. The interior is crafted with the finest materials, including premium leather and wood accents, providing a truly opulent experience for both driver and passengers. The Cullinan also boasts advanced technology such as a panoramic sunroof, rear-seat entertainment system, and a state-of-the-art infotainment system. Step into the world of luxury and power with the Rolls Royce Cullinan.",
                mileage: 12123,
                bodyType: "SUV",
                vin: "IK7J6GR4EHJHK",
                exteriorColor: "Grey",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/47/67d7db0c-4d7a-427c-bcf5-b589ab0af001/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/50/5a8fc9eb-f8c3-4cbf-89bf-019af99c884d/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/47/e4fb1abc-cc60-43ef-b7fe-46d81ee9ab11/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/50/522d5621-6e05-47bc-9570-7c2dca18aa47/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/50/db7d83f0-f3c2-40fa-9fa3-c757789e1095/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/47/f7b215fd-b52f-4dad-b9ad-5ae8932df096/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/47/98d17733-22d0-4b9c-a5b2-a0aaed3acf7b/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/16/09/58/47/03e152a2-e54b-4d73-9310-e2b934d54a0c/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Black Badge Cullinan",
                year: 2020,
                price: 612576,
                description: "Introducing the sleek and powerful Black Badge Cullinan, the ultimate luxury SUV from Rolls-Royce. This limited edition vehicle boasts a bold black exterior with blacked-out accents, including the iconic Spirit of Ecstasy hood ornament and 22-inch forged aluminum wheels. The interior is equally impressive, featuring black leather seats with red contrast stitching, a black leather dashboard, and a black leather-wrapped steering wheel. Powering this masterpiece is a 6.75-liter V12 engine that delivers an awe-inspiring 563 horsepower and 627 lb-ft of torque. The Black Badge Cullinan also features advanced suspension technology for a smooth and stable ride, as well as a host of driver assistance features for added safety and convenience. This is a rare opportunity to own a one-of-a-kind Rolls-Royce that exudes luxury, power, and style. Don't miss out on the chance to make a statement with the Black Badge C",
                mileage: 3085,
                bodyType: "SUV",
                vin: "H45TRTJ5Y6KJY",
                exteriorColor: "Black",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/25/35c538f6-0a86-45f9-959d-1ec263bc0290/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/26/438eb496-90fe-42d4-8400-5090921a7aee/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/25/7ade5d87-2146-47f6-9990-84b3b113c466/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/25/6d21135a-2d6a-47d2-ae15-7b755e477e42/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/26/6b78361c-bb2a-4e39-a34d-76c921efba5b/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/27/417deb09-20fd-4456-bf03-5a0faa2283e2/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/26/46f10bba-da8c-4bec-9d5b-7c3059fad6ba/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/05/17/09/48/27/d1234a25-ae01-44ab-942e-1cd6e8233bf5/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Ghost",
                year: 2023,
                price: 517286,
                description: "Example",
                mileage: 0,
                bodyType: "Sedan",
                vin: "G45J6UYTHRYTR5",
                exteriorColor: "White",
                interiorColor: "Yellow",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/fdea4ba8-975a-4e4e-bfa5-446161c74570/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/298cd287-f7ef-480d-ac54-b06657510c03/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/24/952b74e1-3b7c-42c8-a859-7eb17f71a237/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/f6efbc06-3562-46b0-ac74-821b52cd8756/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/5896bad5-9d20-4ae8-9a73-7a0960e507ba/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/2b1c563d-7ccc-4df1-9428-62de223a612b/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/91abfe7c-1619-4031-ade0-6c3b322d1605/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2023/01/19/13/30/25/7cddb04e-5e78-407a-949e-6d0ad9ec5042/je/768xxsxm.jpg"
            });
            await createRollsRoyce({
                make: "Rolls Royce",
                manufacturerId: 8,
                model: "Ghost",
                year: 2023,
                price: 539005,
                description: "Introducing the Rolls-Royce Ghost, a luxury sedan that exudes elegance and sophistication. This particular Ghost is finished in a sleek black exterior paint, giving it a bold and striking appearance. The interior is wrapped in premium black leather, with contrast stitching and wood veneers adding a touch of warmth and luxury. The Ghost is powered by a 6.75-liter V12 engine, delivering smooth and effortless performance. The car is equipped with advanced features such as a heads-up display, night vision, and a state-of-the-art infotainment system. With its refined styling and unparalleled attention to detail, this Ghost is the epitome of luxury motoring. Experience the ultimate in comfort, performance, and style with this magnificent Rolls-Royce Ghost.",
                mileage: 0,
                bodyType: "Sedan",
                vin: "FGC7BHJ5TN4KTRGE",
                exteriorColor: "Blue",
                interiorColor: "Black",
                doors: 4,
                imageOne: "https://img.jamesedition.com/listing_images/2023/01/09/14/24/50/94f4b6d9-3ad6-4046-8dff-948a434fc241/je/768xxsxm.jpg",
                imageTwo: "https://img.jamesedition.com/listing_images/2023/01/09/14/24/50/a74f7759-da7b-4ab4-984a-b4c493ae180e/je/768xxsxm.jpg",
                imageThree: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/9e365b37-3637-4ac3-9057-7a4a62e1c5d2/je/768xxsxm.jpg",
                imageFour: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/53/95440423-e917-4a24-80b1-b5f342408652/je/768xxsxm.jpg",
                imageFive: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/a1942661-827f-4d4d-a587-f7589efbb47a/je/768xxsxm.jpg",
                imageSix: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/be8e2f7b-8051-497c-8ba3-e4660ce61ea9/je/768xxsxm.jpg",
                imageSeven: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/52/4c45d5cf-afc4-434b-a282-72b81b7aaccc/je/768xxsxm.jpg",
                imageEight: "https://img.jamesedition.com/listing_images/2022/12/23/14/40/51/2f7e4945-6819-488f-b02e-8e4106db24b1/je/768xxsxm.jpg"
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
            console.log("Calling all Lamborghini...");
            const lamborghini = await getAllLamborghini();
            console.log("Results", lamborghini);

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