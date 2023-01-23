const express = require("express");
const apiRouter = express.Router();
require("dotenv").config();

// Routers
const ( manufacturerRouter ) = require("./manufacturer");
const ( bentleyRouter ) = require("./bentley");
const ( bugattiRouter ) = require("./bugatti");
const ( ferrariRouter ) = require("./ferrari");
const ( koenigseggRouter ) = require("./koenigsegg");
const ( mclarenRouter ) = require("./mclaren");
const ( porscheRouter ) = require("./porsche");
const ( rollsrollsRouter ) = require("./rollsroyce");
apiRouter.use("./manufacturer", manufacturerRouter);
apiRouter.use("./bentley", bentleyRouter);
apiRouter.use("./bugatti", bugattiRouter);
apiRouter.use("./ferrari", ferrariRouter);
apiRouter.use("./koenigsegg", koenigseggRouter);
apiRouter.use("./mclaren", mclarenRouter);
apiRouter.use("./porsche", porscheRouter);
apiRouter.use("./rollsroyce", rollsrollsRouter);

// Export
module.export = { apiRouter }