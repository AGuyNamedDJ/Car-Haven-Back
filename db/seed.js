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
            console.log("Calling all Ferrari...");
            const ferrari = await getAllFerrari();
            console.log("Results", ferrari);

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