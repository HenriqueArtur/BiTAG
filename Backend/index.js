import "dotenv/config";
import cors from "cors";
const express = require("express");
const bodyParser = require("body-parser");

const Tag = require("./app/controllers/tag.controller");
const Game = require("./app/controllers/game.controller");
const Home = require("./app/controllers/home.controller");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BiTAG application." });
});

app.get("/api/tags", Tag.findAll);
app.get("/api/tags/findByName", Tag.findByName);
app.get("/api/tags/findByOptions", Tag.findByOptions);

app.get("/api/games", Game.findAll);
app.get("/api/games/findByName", Game.findByName);
app.get("/api/games/findByAppId", Game.findByAppId);
app.get("/api/games/findByTags", Game.findByTags);
app.get("/api/games/findByParams", Game.findByParams);

app.get("/api/home", Home.getInfos);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
