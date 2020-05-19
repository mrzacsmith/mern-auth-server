exports.signup = (req, res) => {
  console.log("REQ BODY ON SIGNUP", req.body);

  res.json({
    message: "Server is running at /signup",
  });
};
