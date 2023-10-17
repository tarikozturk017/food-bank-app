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
    const {
      title,
      description,
      apt_number,
      street,
      city,
      province,
      postal_code,
      phone,
    } = req.body;

    const newFoodbank = await pool.query(
      "INSERT INTO foodbank (title, description, apt_number, street, city, province, postal_code, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title,
        description,
        apt_number,
        street,
        city,
        province,
        postal_code,
        phone,
      ]
    );

    res.json(newFoodbank.rows[0]);
    // console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

//get all foodbanks
app.get("/foodbanks", async (req, res) => {
  try {
    const allFoodbanks = await pool.query("SELECT * FROM foodbank");
    res.json(allFoodbanks.rows);
  } catch (err) {
    console.message(err);
  }
});

// delete foodbank by id
app.delete("/foodbanks/:id", async (req, res) => {
  const foodbankId = req.params.id;
  try {
    await pool.query("DELETE FROM foodbank WHERE foodbank_id = $1", [
      foodbankId,
    ]);
  } catch (err) {
    console.message(err);
  }
});

//update

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
