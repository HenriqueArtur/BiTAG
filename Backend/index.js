import "dotenv/config";
import cors from "cors";
const express = require("express");
const route = require("./app/routes/route.js");
const bodyParser = require("body-parser");

const Tag = require("./app/controllers/tag.controller");

const app = express();

// app.use(cors());
app.use("./api", route);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BiTAG application." });
});

app.get("/tags", Tag.findAll);
app.get("/tags/findByName", Tag.findByName);
app.get("/tags/findByOptions", Tag.findByOptions);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

// const pd = require("./app/services/populateDatabase.js");
// pd.populateDatabase(600000, 43, 0);
