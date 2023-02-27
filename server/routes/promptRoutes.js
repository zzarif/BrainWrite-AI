const express = require("express");
const promptRouter = express.Router();
const {
  getSaaSGenericResponse,
  getResponseForSaaSHeroTitle,
  getResponseForSaaSTeamCopy,
  getPortfolioGenericResponse,
  getResponseForPortfolioHeroTitle
} = require("../controllers/promptController");

promptRouter.post("/saasGeneric", getSaaSGenericResponse);
promptRouter.post("/saasHeroTitle", getResponseForSaaSHeroTitle);
promptRouter.post("/saasTeamCopy", getResponseForSaaSTeamCopy);

promptRouter.post("/portfolioGeneric", getPortfolioGenericResponse);
promptRouter.post("/portfolioHeroTitle", getResponseForPortfolioHeroTitle);

module.exports = promptRouter;
