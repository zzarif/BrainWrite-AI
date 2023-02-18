const express = require("express");
const selectRouter = express.Router();
const {
  getWebsiteTypeList,
  getSaaSCopyList,
  getEcomCopyList,
  getPortfolioCopyList,
} = require("../controllers/selectController");

selectRouter.get("/websiteTypeList", getWebsiteTypeList);
selectRouter.get("/saasCopyList", getSaaSCopyList);
selectRouter.get("/ecomCopyList", getEcomCopyList);
selectRouter.get("/portfolioCopyList", getPortfolioCopyList);

module.exports = selectRouter;
