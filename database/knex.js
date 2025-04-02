// database/knex.js
const knex = require("knex");
const { Model } = require("objection");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.INFO_DB,
    ssl: { rejectUnauthorized: false },
  },
});

Model.knex(db);
module.exports = db;
