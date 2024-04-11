const mongoose = require('mongoose');
const Joi = require('joi');

const moduleSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

const trainingModule = mongoose.model('Training-Module', moduleSchema);
const moduleValidate = (data) => {
    const schema = Joi.object({
        imageUrl: Joi.string().required().label("img_url"),
        name: Joi.string().required().label("name"),
        description: Joi.array().items(Joi.string()).label("description"),
    });

    return schema.validate(data)
};

module.exports = {trainingModule, moduleValidate};
