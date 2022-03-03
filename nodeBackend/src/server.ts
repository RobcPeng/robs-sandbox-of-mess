import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`this is running on ${port}`);
});