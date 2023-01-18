// 1) Imports 
// const { Client } = require('pg');
require('dotenv').config();
const pg = require('pg');

// 2) Now we have to establish a client connection to our DB url
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost:5432/Car-Haven');

// 3) Export this client connection that we just created
module.exports = { client };