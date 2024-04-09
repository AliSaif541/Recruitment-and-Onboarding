const mongoose = require('mongoose');
const Joi = require('joi');

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

const reviewValidate = (data) => {
    const schema = Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        date: Joi.date().iso(),
        name: Joi.string().required(),
        role: Joi.string().required(),
        review: Joi.string().required()
    });

    return schema.validate(data)
};

module.exports = { Review, reviewValidate };
