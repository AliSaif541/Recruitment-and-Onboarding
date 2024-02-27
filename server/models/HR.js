const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true
        },
    contact_number: {
        type: Number,
         required: true
        },
    role: {
        type: String,
         required: true
        },
    email: {
        type: String,
         required: true
        },
    password: {
        type: String,
        required: true
    },
});

// function generateAuthToken() {
//     const token = jwt.sign({_id: this._id}, 'ALI+QASIM_DB', {expiresIn: "365d"});
//     return token;
// }
// userSchema.methods.generateAuthToken = generateAuthToken();



const HR = mongoose.model("hr", userSchema);
const hrValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        role: Joi.string().required().label("Role"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        contact_number: Joi.number().required().label("Contact_Number"),  
    });

  return schema.validate(data)
};

module.exports = { HR, hrValidate };