const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.json({
    message: "Server is running at /signup",
  });
});

module.exports = router;
