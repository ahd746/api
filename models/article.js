
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);