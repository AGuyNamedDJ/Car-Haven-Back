const express = require("express");
const apiRouter = express.Router();
require("dotenv").config();

// Routers
const {manufacturerRouter} = require('./manufacturer');
const {bentleyRouter} = require('./bentley');
const { bugattiRouter } = require("./bugatti");
const { ferrariRouter } = require("./ferrari");
const { koenigseggRouter } = require("./koenigsegg");
const { lamborghiniRouter } = require("./lamborghini");
const { mclarenRouter } = require("./mclaren");
const { porscheRouter } = require("./porsche");
const { rollsRoyceRouter } = require("./rollsroyce");

apiRouter.use('/manufacturer', manufacturerRouter);
apiRouter.use('/bentley', bentleyRouter);
apiRouter.use("/bugatti", bugattiRouter);
apiRouter.use("/ferrari", ferrariRouter);
apiRouter.use("/koenigsegg", koenigseggRouter);
apiRouter.use("/lamborghini", lamborghiniRouter);
apiRouter.use("/mclaren", mclarenRouter);
apiRouter.use("/porsche", porscheRouter);
apiRouter.use("/rollsroyce", rollsRoyceRouter);
    // There should be no ./ here 

// Export
module.exports = { apiRouter }