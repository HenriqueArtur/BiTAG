import "dotenv/config";
import cors from "cors";
const express = require("express");
const bodyParser = require("body-parser");

const Tag = require("./app/controllers/tag.controller");
const Game = require("./app/controllers/game.controller");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BiTAG application." });
});

app.get("/tags", Tag.findAll);
app.get("/tags/findByName", Tag.findByName);
app.get("/tags/findByOptions", Tag.findByOptions);

app.get("/api/games", Game.findAll);
app.get("/api/games/findByName", Game.findByName);
app.get("/api/games/findByAppId", Game.findByAppId);
app.get("/api/games/findByTags", Game.findByTags);
app.get("/api/games/findByParams", Game.findByParams);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
