const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

// import routes
const authRoutes = require("./routes/auth.js");

// app middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cors())
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `http://localhost:3000` }));
}

// middleware
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running at /",
  });
});

const PORT = process.env.PORT || 7500;

app.listen(PORT, () => {
  console.log(`\n** Server is running ${PORT} - ${process.env.NODE_ENV} **\n`);
});
