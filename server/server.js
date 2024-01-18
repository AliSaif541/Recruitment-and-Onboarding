const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONG_URL)
.then(()=>{
    app.listen(9000, ()=>{
        console.log(`listening on port ${process.env.PORT}`);
        console.log("Connected to Database");
    })
})
.catch((error)=>{
    console.log(error);
});

module.exports = app;