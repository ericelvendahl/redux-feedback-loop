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

router.post("/", (req, res) => {
  console.log("in server POST for /feedback");
  console.log("req.body is", req.body);
  let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;
  pool
    .query(queryString, [
      req.body.feeling,
      req.body.understanding,
      req.body.supported,
      req.body.comments,
    ])
    .then((result) => {
      res.send(201).catch((err) => {
        console.log("Error in POST /feedback call. Error is:", err);
        res.send(500);
      });
    });
});

module.exports = router;
