const websiteTypeList = require("../raw/websiteTypeList.json");
const saasCopyList = require("../raw/saasCopyList.json");
const portfolioSubList = require("../raw/portfolioSubList.json");
const portfolioCopyList = require("../raw/portfolioCopyList.json");
const sysMsg = require("../constants/systemMessages");
const asyncHandler = require("express-async-handler");

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
const getSaaSGenericResponse = asyncHandler(async (req, res) => {
  const { companyName, companyDesc, websiteType, copy, context } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCopy = saasCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"`;
  if (context) prompt += dedent`Context: ${context}`;
  prompt += dedent`Generate "${sCopy}".`;

  console.log(prompt + "\n" + sysMsg.SAAS_GENERIC);

  const completion = await openai.createChatCompletion({
    messages: [
      {
        role: "system",
        content: sysMsg.SAAS_GENERIC,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo-0301",
    temperature: 0.8,
    max_tokens: 800,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0.2,
  });
  
  if(completion.data.choices[0].message.content) {
    console.log(completion.data.choices[0].message);
    res.status(200).json({
        message: completion.data.choices[0].message.content.trim(),
    });
  }
  else throw new Error("Something went wrong");
});

// Prompt OpenAI for SAAS hero title
// Serve SAAS hero title
const getResponseForSaaSHeroTitle = asyncHandler(async (req, res) => {
  const { companyName, companyDesc, websiteType, copy, context } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCopy = saasCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"`;
  if (context) prompt += dedent`Context: ${context}`;
  prompt += dedent`Generate "${sCopy}".`;

  console.log(prompt + "\n" + sysMsg.SAAS_HERO_TITLE);

  const completion = await openai.createChatCompletion({
    messages: [
      {
        role: "system",
        content: sysMsg.SAAS_HERO_TITLE,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo-0301",
    temperature: 0.8,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.3,
  });

  if(completion.data.choices[0].message.content) {
    console.log(completion.data.choices[0].message);
    res.status(200).json({
        message: completion.data.choices[0].message.content.trim(),
    });
  }
  else throw new Error("Something went wrong");
});


//////////////////////////////////////////////////// PORTFOLIO /////////////////////////////////////////////////////////

// Prompt OpenAI Generic function
// ONLY for PORTFOLIO NO EXAMPLE use cases
const getPortfolioGenericResponse = asyncHandler(async (req, res) => {
  const { companyName, companyDesc, websiteType, category, copy, context } =
    req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCategory = portfolioSubList[category].label;
  const sCopy = portfolioCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"
    Category: "${sCategory}"`;
  if (context) prompt += dedent`Context: ${context}`;
  prompt += dedent`Generate "${sCopy}".`;

  console.log(prompt + "\n" + sysMsg.PORTFOLIO_GENERIC);

  const completion = await openai.createChatCompletion({
    messages: [
      {
        role: "system",
        content: sysMsg.PORTFOLIO_GENERIC,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo-0301",
    temperature: 0.8,
    max_tokens: 800,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0.2,
  });

  if(completion.data.choices[0].message.content) {
    console.log(completion.data.choices[0].message);
    res.status(200).json({
        message: completion.data.choices[0].message.content.trim(),
    });
  }
  else throw new Error("Something went wrong");
});

// Prompt OpenAI for PORTFOLIO hero title
// Serve PORTFOLIO hero title
const getResponseForPortfolioHeroTitle = asyncHandler(async (req, res) => {
  const { companyName, companyDesc, websiteType, category, copy, context } = req.body;

  const sWebsiteType = websiteTypeList[websiteType].label;
  const sCategory = portfolioSubList[category].label;
  const sCopy = portfolioCopyList[copy].label;

  const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${sWebsiteType}"
    Category: "${sCategory}"`;
    if (context) prompt += dedent`Context: ${context}`;
    prompt += dedent`Generate "${sCopy}".`;
  
    console.log(prompt + "\n" + sysMsg.PORTFOLIO_HERO_TITLE);
  
    const completion = await openai.createChatCompletion({
      messages: [
        {
          role: "system",
          content: sysMsg.PORTFOLIO_HERO_TITLE,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo-0301",
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0.3,
      presence_penalty: 0.3,
    });
  
    if(completion.data.choices[0].message.content) {
      console.log(completion.data.choices[0].message);
      res.status(200).json({
          message: completion.data.choices[0].message.content.trim(),
      });
    }
    else throw new Error("Something went wrong");
});

module.exports = {
  getSaaSGenericResponse,
  getResponseForSaaSHeroTitle,
  getPortfolioGenericResponse,
  getResponseForPortfolioHeroTitle,
};
