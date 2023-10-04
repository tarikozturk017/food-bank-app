const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // to write sql queries

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

// create foodbank
app.post("/foodbanks", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//get

//update

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
