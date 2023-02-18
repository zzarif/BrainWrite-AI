// const consts = require('./constants');
// const OpenAI = require('openai');
// const { Configuration, OpenAIApi } = OpenAI;

// const bodyParser = require('body-parser');
// const cors = require('cors');

const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/api/select', require('./routes/selectRoutes'));


// const configuration = new Configuration({
//   organization: consts.ORGANIZATION,
//   apiKey: consts.API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/", async (req, res) => {
//   const { message } = req.body;

//   const response = await openai.createCompletion({
//     model: consts.MODEL,
//     prompt: `${message}`,
//     temperature: consts.TEMPERATURE,
//     max_tokens: consts.MAX_TOKENS,
//     top_p: consts.TOP_P,
//     frequency_penalty: consts.FREQUENCY_PENALTY,
//     presence_penalty: consts.PRESENCE_PENALTY,
//     best_of: consts.BEST_OF
//   });
//   console.log(response.data);
//   if (response.data.choices[0].text) {
//     res.json({
//       message: response.data.choices[0].text,
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Brain Write AI is listening on ${port}`);
});
