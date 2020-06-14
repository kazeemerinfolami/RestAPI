const mongoose = require("mongoose");

exports.userSchema = new mongoose.Schema(
  {
    profession: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    phoneNo: {
      type: Number,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      default: "subscribers",
    },
  },
  { timestamps: true }
);

//mongoose.model("Person_key", userSchema);
