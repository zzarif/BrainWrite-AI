const express = require("express");
const promptRouter = express.Router();
const {
  getResponseForSaaSHeroTitle,
} = require("../controllers/promptController");

promptRouter.post("/saasHeroTitle", getResponseForSaaSHeroTitle);

module.exports = promptRouter;
