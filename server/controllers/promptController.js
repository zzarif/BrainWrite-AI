const websiteTypeList = require("../raw/websiteTypeList.json");
const saasCopyList = require("../raw/saasCopyList.json");
const portfolioSubList = require("../raw/portfolioSubList.json");
const portfolioCopyList = require("../raw/portfolioCopyList.json");

const OpenAI = require("openai");
const dedent = require("dedent");
const dotenv = require("dotenv").config();
const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);


//////////////////////////////////////////////////// SAAS /////////////////////////////////////////////////////////

// Prompt OpenAI Generic function
// ONLY for SAAS NO EXAMPLE use cases
const getSaaSGenericResponse = async (req, res) => {
  const { companyName, companyDesc, websiteType, copy } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCopy = saasCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"

    Write copy for "${sCopy}".`;

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.8,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.3,
    best_of: 1,
  });

  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text.trim(),
    });
  }
  // res.json({});
};

// Prompt OpenAI for SAAS hero title
// Serve SAAS hero title
const getResponseForSaaSHeroTitle = async (req, res) => {
  const { companyName, companyDesc, websiteType, copy } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCopy = saasCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"

    Write copy for "${sCopy}".

    Examples:
    Slack: "Where Work Happens. Simplify communication and collaboration, for teams of all sizes."
    Hubspot: "Grow Better. The all-in-one marketing, sales, and service platform, designed to help you succeed."
    Zoom: "Connect. From Anywhere. Video conferencing made it easy for remote teams and global meetings."
    Quickbooks: "Manage Your Finances, Effortlessly. Simplify accounting, for small businesses and freelancers alike."
    Dropbox: "Store, Sync, and Share. Keep your files and data safe, accessible, and always up-to-date."`;

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.8,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.3,
    best_of: 1,
  });

  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text.trim(),
    });
  }
  // res.json({});
};


// Prompt OpenAI for SAAS team copy
// Serve SAAS team copy
const getResponseForSaaSTeamCopy = async (req, res) => {
  const { companyName, companyDesc, websiteType, copy, teamMemberList } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCopy = saasCopyList[copy].label;
  const sTeamMemberList = teamMemberList.join("\n");

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"

    Team Members:
    ${sTeamMemberList}

    Write copy for "${sCopy}" for the above members.`;

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0.2,
    best_of: 1,
  });

  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text.trim(),
    });
  }
  // res.json({});
};


//////////////////////////////////////////////////// PORTFOLIO /////////////////////////////////////////////////////////

// Prompt OpenAI Generic function
// ONLY for PORTFOLIO NO EXAMPLE use cases
const getPortfolioGenericResponse = async (req, res) => {
  const { companyName, companyDesc, websiteType, category, copy } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCategory = portfolioSubList[category].label;
  const sCopy = portfolioCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"
    Category: "${sCategory}"

    Write copy for "${sCopy}".`;

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.8,
    max_tokens: 800,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.3,
    best_of: 1,
  });

  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text.trim(),
    });
  }
  // res.json({});
};


// Prompt OpenAI for PORTFOLIO hero title
// Serve PORTFOLIO hero title
const getResponseForPortfolioHeroTitle = async (req, res) => {
  const { companyName, companyDesc, websiteType, category, copy } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCategory = portfolioSubList[category].label;
  const sCopy = portfolioCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"
    Category: "${sCategory}"

    Write copy for "${sCopy}".

    Examples:
    Behance: "Showcase Your Creativity. Share your work, connect with peers, and build your online presence."
    Dribbble: "Design Better. Discover and connect with the world's top designers, and showcase your work."
    Elon Musk's Portfolio: "Innovating the Future. Discover the mind behind Tesla, SpaceX, and more, and see what's next."
    Contently: "Storytelling at its Best. Showcase your writing and journalism skills, and connect with top brands."
    Bill Gates' Portfolio: "Making a Difference. Explore the life and work of the Microsoft co-founder, and see how he's improving the world."`;

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.8,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.3,
    best_of: 1,
  });

  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text.trim(),
    });
  }
  // res.json({});
};

module.exports = {
  getSaaSGenericResponse,
  getResponseForSaaSHeroTitle,
  getResponseForSaaSTeamCopy,

  getPortfolioGenericResponse,
  getResponseForPortfolioHeroTitle,
};
