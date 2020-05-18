const express = require("express");
const app = express();

// import routes
const authRoutes = require("./routes/auth.js");

// middleware
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running at /",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`\n** Server is running ${PORT} **\n`);
});
