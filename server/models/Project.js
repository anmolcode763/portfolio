const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tech: [String],
  liveUrl: { type: String },
  repoUrl: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Project', ProjectSchema);