const websiteTypeList = require("../raw/websiteTypeList.json");
const saaSCopyList = require("../raw/saasCopyList.json");
const portfolioCopyList = require("../raw/portfolioCopyList.json");
const portfolioSubList = require("../raw/portfolioSubList.json");
const asyncHandler = require("express-async-handler");

// serve list of website types
const getWebsiteTypeList = asyncHandler(async (req, res) => {
    if(websiteTypeList) res.status(200).json(websiteTypeList);
    else throw new Error("Something went wrong");
});

// serve list of copy types for SAAS website
const getSaaSCopyList = asyncHandler(async (req, res) => {
    if(saaSCopyList) res.status(200).json(saaSCopyList);
    else throw new Error("Something went wrong");
});

// serve list of sub category for PORTFOLIO website
const getPortfolioSubList = asyncHandler(async (req, res) => {
    if(portfolioSubList) res.status(200).json(portfolioSubList);
    else throw new Error("Something went wrong");
});

// serve list of copy types for PORTFOLIO website
const getPortfolioCopyList = asyncHandler(async (req, res) => {
    if(portfolioCopyList) res.status(200).json(portfolioCopyList);
    else throw new Error("Something went wrong");
});


module.exports = {
    getWebsiteTypeList, getSaaSCopyList,
    getPortfolioSubList, getPortfolioCopyList
} 