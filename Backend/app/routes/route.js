const { Router } = require("express");
// const controllers = require("../controllers");
const router = Router();
router.get("/", (req, res) =>
  res.json({ message: "Welcome to BiTAG application." })
);
module.exports = router;

// module.exports = (app) => {
//   let tags = require("../controllers/tag.controller.js");
//   let router = require("express").Router();

//   router.get("/tags", (req, res) => {
//     res.json({ message: "Welcome to TAGS application." });
//   });

//   app.use("/api/tags", router);
// };
