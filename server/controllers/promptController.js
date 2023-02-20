const OpenAI = require("openai");
const dedent = require("dedent");
const dotenv = require("dotenv").config();
const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const getResponseForSaaSHeroTitle = async (req, res) => {
    const { companyName, companyDesc, websiteType, copyType } = req.body;

    const prompt = dedent`Company Name: "${companyName}"
    Company Description: "${companyDesc}"
    Website Type: "${websiteType}"

    Write copy for "${copyType}".

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
          message: response.data.choices[0].text
                      .replace(/(\r\n|\n|\r)/gm, ""),
        });
    }
    // res.json({});
};


module.exports = {
  getResponseForSaaSHeroTitle,
};
