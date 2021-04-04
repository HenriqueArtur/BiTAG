require("dotenv/config");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const Tag = require("./app/controllers/tag.controller");
const Game = require("./app/controllers/game.controller");
const Home = require("./app/controllers/home.controller");

const app = express();

app.use(cors({
  exposedHeaders: ['All-Games', 'Games-Found', 'Page', "Access-Control-Allow-Origin"],
  // origin: 'https://fresh-impala-16.loca.lt',
  // optionsSuccessStatus: 200
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "https://fresh-impala-16.loca.lt");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//   next();
// });
app.use(express.static('../frontend/build'))


app.get("/", express.static('../frontend/build'));

app.get("/api/tags", Tag.findAll);
app.get("/api/tags/findByName", Tag.findByName);
app.get("/api/tags/findByOptions", Tag.findByOptions);

app.get("/api/games", Game.findAll);
app.get("/api/games/findByName", Game.findByName);
app.get("/api/games/findByAppId", Game.findByAppId);
app.get("/api/games/findByTags", Game.findByTags);
app.get("/api/games/findByParams", Game.findByParams);
app.get("/api/games/search", Game.search);

app.get("/api/home", Home.getInfos);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

module.exports = app;