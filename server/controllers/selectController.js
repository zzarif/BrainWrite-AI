const websiteTypeList = require("../raw/websiteTypeList.json");
const saaSCopyList = require("../raw/saasCopyList.json");
const ecomCopyList = require("../raw/ecomCopyList.json");
const portfolioCopyList = require("../raw/portfolioCopyList.json");

// serve list of website types
const getWebsiteTypeList = (req, res) => {
    res.status(200).json(websiteTypeList);
}

// serve list of copy types for SAAS website
const getSaaSCopyList = (req, res) => {
    res.status(200).json(saaSCopyList);
}

// serve list of copy types for E-COMMERCE website
const getEcomCopyList = (req, res) => {
    res.status(200).json(ecomCopyList);
}

// serve list of copy types for PORTFOLIO website
const getPortfolioCopyList = (req, res) => {
    res.status(200).json(portfolioCopyList);
}

module.exports = {
    getWebsiteTypeList, getSaaSCopyList,
    getEcomCopyList, getPortfolioCopyList
} 