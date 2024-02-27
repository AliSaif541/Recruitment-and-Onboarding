const mongoose = require('mongoose');
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true
        },
    email: {
        type: String,
         required: true
        },
    contact_number: {
        type: SVGAnimatedNumberList,
         required: true
        },
    cover_letter: {
        type: String,
         required: true
        },
    years_of_exp: {
        type: Number,
         required: true
        },
    experience: {
        type: String,
            required: true
        },
    education: {
        type: String,
         required: true
        },
    jobID: {

    }
});

const jobApplicant = mongoose.model("jobApplicant", userSchema);
const jobApplicantValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        email: Joi.string().required().label("email"),
        contact_number: Joi.number().required().label("Contact_Number"), 
        cover_letter: Joi.string().required().label("cover_letter"),
        years_of_exp: Joi.number().required().label("years_of_exp"),
        education: Joi.string().required().label("education"),
        experience: Joi.string().required().label("experience"),
        jobID:
    });

  return schema.validate(data)
};

module.exports = { jobApplicant, jobApplicantValidate };