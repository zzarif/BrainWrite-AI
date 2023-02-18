// serve list of website types
const getWebsiteTypeList = (req, res) => {
    res.status(200).json([
        {
            value: 0,
            label: 'SaaS',
        },
        {
            value: 1,
            label: 'E-commerce',
        },
        {
            value: 2,
            label: 'Portfolio',
        },
    ]);
}

// serve list of copy types for SAAS website
const getSaaSCopyList = (req, res) => {
    res.status(200).json([
        {
            value: 0,
            label: 'Hero Title',
        },
        {
            value: 1,
            label: 'Customer Review/Testimonial',
        },
        {
            value: 2,
            label: 'Features Page',
        },
        {
            value: 3,
            label: 'Demo Page',
        },
        {
            value: 4,
            label: 'Customer Success Story',
        },
        {
            value: 5,
            label: 'Team Copy',
        },
        {
            value: 6,
            label: 'Documentation/Tutorials',
        },
        {
            value: 7,
            label: 'FAQ',
        },
        {
            value: 8,
            label: 'Mission/Vision/Values',
        },
        {
            value: 9,
            label: 'Sample Terms and Condition/Return policy',
        },
    ]);
}

// serve list of copy types for E-COMMERCE website
const getEcomCopyList = (req, res) => {
    res.status(200).json([
        {
            value: 0,
            label: 'ecom1',
        },
        {
            value: 1,
            label: 'ecom2',
        },
        {
            value: 2,
            label: 'ecom3',
        },
    ]);
}

// serve list of copy types for PORTFOLIO website
const getPortfolioCopyList = (req, res) => {
    res.status(200).json([
        {
            value: 0,
            label: 'pf1',
        },
        {
            value: 1,
            label: 'pf2',
        },
        {
            value: 2,
            label: 'pf3',
        },
    ]);
}

module.exports = {
    getWebsiteTypeList, getSaaSCopyList,
    getEcomCopyList, getPortfolioCopyList
} 