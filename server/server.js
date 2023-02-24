const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/select", require("./routes/selectRoutes"));
app.use("/api/prompt", require("./routes/promptRoutes"));


app.listen(port, () => {
  console.log(`Brain Write AI is listening on ${port}`);
});
