const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;


const configuration = new Configuration({
    organization: "org-h7YLCmGP3QzeuXlZkbpjCTOA",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {

    const { message } = req.body;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0
    });
    console.log(response.data)
    if(response.data.choices[0].text) {
        res.json({
            message: response.data.choices[0].text
        });
    }
});

app.listen(port, () => {
    console.log('Brain Write AI is listening');
});