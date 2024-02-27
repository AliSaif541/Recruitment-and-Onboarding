const mongoose = require('mongoose');
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true
        },
    company: {
        type: String,
         required: true
        },
    salary: {
        type: String,
         required: true
        },
    job_type: {
        type: String,
         required: true
        },
    location: {
        type: String,
         required: true
        },
    description: {
        type: String,
         required: true
        },
});

const Job = mongoose.model("job", userSchema);
const jobValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        company: Joi.string().required().label("company"),
        salary: Joi.string().required().label("salary"),
        job_type: Joi.string().required().label("job_type"),
        location: Joi.string().required().label("location"),
        description: Joi.string().required().label("description"),
    });

  return schema.validate(data)
};

module.exports = { Job, jobValidate };