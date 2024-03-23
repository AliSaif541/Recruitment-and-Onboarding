const mongoose = require('mongoose');
const Joi = require("joi");

const educationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    location: String,
    graduationYear: String,
    gpa: String
});

const experienceSchema = new mongoose.Schema({
    title: String,
    company: String,
    from: Date,
    to: Date,
    rolesResponsibilities: String
});

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
        type: String,
        required: true
    },
    gender: String,
    city: String,
    GitHub: String,
    LinkedIn: String,
    years_of_exp: {
        type: Number,
        required: true
    },
    cover_letter: {
        type: String,
        required: true
    },
    resume: String,
    skills: [String], // Updated to store skills as an array of strings
    education: [educationSchema],
    experience: [experienceSchema],
    rating: Number,
    stage: String,
    jobID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const jobApplicant = mongoose.model("jobApplicant", userSchema);

const jobApplicantValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        email: Joi.string().required().label("email"),
        contact_number: Joi.string().required().label("Contact_Number"),
        gender: Joi.string().label("Gender"),
        city: Joi.string().label("City"),
        GitHub: Joi.string().label("GitHub"),
        LinkedIn: Joi.string().label("LinkedIn"),
        years_of_exp: Joi.number().required().label("years_of_exp"),
        cover_letter: Joi.string().required().label("cover_letter"),
        resume: Joi.string().label("resume"),
        skills: Joi.array().items(Joi.string()).label("Skills"),
        education: Joi.array().items(Joi.object({
            institution: Joi.string().required(),
            degree: Joi.string().required(),
            location: Joi.string().required(),
            graduationYear: Joi.string().required(),
            gpa: Joi.string().required()
        })).label("Education"),
        experience: Joi.array().items(Joi.object({
            title: Joi.string().required(),
            company: Joi.string().required(),
            from: Joi.date().required(),
            to: Joi.date().required(),
            rolesResponsibilities: Joi.string().required()
        })).label("Experience"),
        rating: Joi.number().label("Rating"),
        stage: Joi.string().label("Stage"),
        jobID: Joi.string().required().label("jobID")
    });

    return schema.validate(data)
};

module.exports = { jobApplicant, jobApplicantValidate };
