const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "2023Foodbank2023",
  host: "localhost",
  port: 5432,
  database: "foodbankapp",
});

module.exports = pool;
