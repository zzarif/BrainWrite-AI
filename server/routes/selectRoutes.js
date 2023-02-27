const express = require("express");
const selectRouter = express.Router();
const {
  getWebsiteTypeList,
  getSaaSCopyList,
  getPortfolioSubList,
  getPortfolioCopyList
} = require("../controllers/selectController");

selectRouter.get("/websiteTypeList", getWebsiteTypeList);
selectRouter.get("/saasCopyList", getSaaSCopyList);
selectRouter.get("/portfolioSubList", getPortfolioSubList);
selectRouter.get("/portfolioCopyList", getPortfolioCopyList);

module.exports = selectRouter;
