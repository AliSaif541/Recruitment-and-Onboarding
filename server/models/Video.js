const mongoose = require('mongoose');
const Joi = require('joi');

const videoSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  trainingModule: {
    type: String,
    required: true
  },
});

const Video = mongoose.model('Video', videoSchema);
const videoValidate = (data) => {
    const schema = Joi.object({
        videoUrl: Joi.string().required().label("video_url"),
        imageUrl: Joi.string().required().label("img_url"),
        title: Joi.number().required().label("title"),
        description: Joi.array().items(Joi.string()).label("description"),
        trainingModule: Joi.string().required().label("tarining_module"),
    });

    return schema.validate(data)
};

module.exports = {Video, videoValidate};
