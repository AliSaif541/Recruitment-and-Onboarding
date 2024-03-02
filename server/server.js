const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const jobRoutes = require("./routes/job");
const HRRoutes = require("./routes/hr");
const applicantRoutes = require("./routes/jobApplicant");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/recruitment")
.then(()=>{
    app.listen(9000, ()=>{
        console.log(`listening on port ${9000}`);
        console.log("Connected to Database");
    })
})
.catch((error)=>{
    console.log(error);
});

app.use("/api/job", jobRoutes);
app.use("/api/hr", HRRoutes);
app.use("/api/jobApplicant", applicantRoutes);

module.exports = app;