const websiteTypeList = require("../raw/websiteTypeList.json");
const saaSCopyList = require("../raw/saasCopyList.json");
const portfolioCopyList = require("../raw/portfolioCopyList.json");
const portfolioSubList = require("../raw/portfolioSubList.json");

// serve list of website types
const getWebsiteTypeList = (req, res) => {
    res.status(200).json(websiteTypeList);
}

// serve list of copy types for SAAS website
const getSaaSCopyList = (req, res) => {
    res.status(200).json(saaSCopyList);
}

// serve list of sub category for PORTFOLIO website
const getPortfolioSubList = (req, res) => {
    res.status(200).json(portfolioSubList);
}

// serve list of copy types for PORTFOLIO website
const getPortfolioCopyList = (req, res) => {
    res.status(200).json(portfolioCopyList);
}


module.exports = {
    getWebsiteTypeList, getSaaSCopyList,
    getPortfolioSubList, getPortfolioCopyList
} 