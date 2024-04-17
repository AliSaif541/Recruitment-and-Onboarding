const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const socketIo = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');
const jobRoutes = require("./routes/job");
const HRRoutes = require("./routes/hr");
const applicantRoutes = require("./routes/jobApplicant");
const chatMessageRoutes = require('./routes/ChatMessage');
const videoRoutes = require('./routes/Video');
const reviewRoutes = require('./routes/review');
const trainingRoutes = require('./routes/TrainingModules');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONG_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listening on port ${PORT}`); 
        console.log("Connected to Database");
    })
})
.catch((error)=>{
    console.log(error);
});

app.use("/api/job", jobRoutes);
app.use("/api/hr", HRRoutes);
app.use("/api/jobApplicant", applicantRoutes);
app.use("/messages", chatMessageRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/training", trainingRoutes);

module.exports = app;