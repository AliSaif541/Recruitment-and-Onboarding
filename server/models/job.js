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
        type: Number, 
        required: true
    },
    benefits: [String],
    job_type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skillsNeeded: [String],
    requirements: [String],
    description: {
        type: String,
        required: true
    },
    active: {
        type: String,
        required: true
    },
});


const Job = mongoose.model("job", userSchema);
const jobValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        company: Joi.string().required().label("company"),
        salary: Joi.number().required().label("salary"),
        benefits: Joi.array().items(Joi.string()).label("benefits"),
        job_type: Joi.string().required().label("job_type"),
        location: Joi.string().required().label("location"),
        skillsNeeded: Joi.array().items(Joi.string()).label("skillsNeeded"),
        requirements: Joi.array().items(Joi.string()).label("requirements"),
        description: Joi.string().required().label("description"),
        active: Joi.string().required().label("active"),
    });

    return schema.validate(data)
};

module.exports = { Job, jobValidate };