const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString:
    "postgres://vlxjbrvv:cHfbfS0Ij5Ap8MjpNdC1jNaLHeFjg2Ei@peanut.db.elephantsql.com/vlxjbrvv",
});
// const pool = new Pool({
//   user: "postgres",
//   password: "2023Foodbank2023",
//   host: "localhost",
//   port: 5432,
//   database: "foodbankapp",
// });

module.exports = pool;
