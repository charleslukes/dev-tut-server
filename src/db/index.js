const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  database: "devtut"
});

module.exports = pool;
