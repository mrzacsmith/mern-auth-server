const express = require("express");
const app = express();

app.get("/api/signup", (req, res) => {
  res.json({
    message: "Server is running at /signup",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`\n** Server is running ${PORT} **\n`);
});
