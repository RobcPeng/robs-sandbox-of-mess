import cors from "cors";
import express from "express";
require("dotenv").config();

const app = express();
const port = process.env.PORT;
// Enable cors for preflight
app.options("*", cors());

// Whitelist all routes with cors
app.use(cors());

// Use express json
app.use(express.json());

app.get("/initial", (req, res) => {
  res.status(200).json({ hi: "world" });
});

app.listen(port, () => {
  console.log(`this is running on ${port}`);
});
