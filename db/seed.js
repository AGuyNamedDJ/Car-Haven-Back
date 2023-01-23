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
                doors: 2,
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