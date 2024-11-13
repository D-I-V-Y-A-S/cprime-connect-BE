const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    Emp_id: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Email_id_official: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-z]+\.[a-z]+@cprime\.com$/,
    },
    Designation: {
      type: String,
      required: true,
    },
    Reporting_Manager: {
      type: String,
      required: true,
    },
    Email_id_personal: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z]+\d*\.[a-zA-Z]+\d*@\w+\.\w+$/,
    },
    DOB: {
      type: Date,
      required: true,
    },
    Mobile_no: {
      type: String,
      required: true,
      match: /^\d{10}$/,
    },
    Department: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  { collection: "candidates" }
);

module.exports = mongoose.model("candidates", candidateSchema);
