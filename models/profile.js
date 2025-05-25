const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  info: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true }
    }
  ],
  meterics: Array,
  skills: Array,
  portfolios: Array,
  socialLinks: Array,
  experiences: Array
});


// Explicitly tell Mongoose to use the 'portfolioMain' collection
module.exports = mongoose.model('Profile', profileSchema, 'portfolioMain');
