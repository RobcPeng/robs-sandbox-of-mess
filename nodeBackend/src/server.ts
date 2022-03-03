import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/initial", (req, res) => {
  res.status(200).json({ hi: "world" });
});

app.listen(port, () => {
  console.log(`this is running on ${port}`);
});
