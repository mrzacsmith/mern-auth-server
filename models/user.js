const mongoose = requrie("mongoose");
const crypto = require("crypto");

// user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      data: String,
      trim: true,
      required: true,
      max: 32,
    },
    email: {
      data: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    hashed_password: {
      data: String,
      required: true,
    },
    salt: String,
    role: {
      data: String,
      default: "subscriber",
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

// virtual

// methods
