// models/jobs.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  work_hours: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
