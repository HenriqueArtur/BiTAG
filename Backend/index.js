import "dotenv/config";
import cors from "cors";
import express from "express";
const app = express();
const { Game } = require("./app/models");

Game.create({
  id: 1,
  name: "Teodoro",
  price: 2.5,
  inital_price: 2.5,
  revenue: 0,
  positive_reviews: 0,
  negative_reviews: 0,
  owners: 0,
  release_date: Date.now(),
  website: "https://cosmonkeys.netlify.app/",
  developer_name: "CosMonkeys",
  publisher_name: "CosMonkeys",
  header_image: "https://cosmonkeys.netlify.app/comingSoon.png",
  about: "Não sei",
  short_description:
    "Adorable sokoban classic puzzle game with some simple plus and beautiful hand-drawn art. Help Teodoro to restore all flowers Altars in the Peaceful Forest.",
  detailed_description:
    "Help Teodoro - Teodoro must solve sokoban puzzles to restore beauty to Peaceful Forest.",
});

// Permite acesso externo
app.use(cors());

// Desativa o X-Powered-By: Express
app.disable("x-powered-by");

// Criamos uma rota raiz com o texto Hello World!
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Passamos a porta onde o servidor ficará ouvindo
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
