const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

// connect to db ~ check deprecated warnings https://mongoosejs.com/docs/deprecations.html
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error", err));

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
