const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("in server GET for /feedback");
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      console.log(
        "GET request to /feedback successful. Back with",
        result.rows
      );
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error in GET for /feedback", error);
      res.sendStatus(500);
    });
});

module.exports = router;
