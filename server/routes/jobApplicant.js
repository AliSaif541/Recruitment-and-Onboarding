const router = require('express').Router();
const multer = require('multer');
const mongoose = require('mongoose');
const gridfs = require('gridfs-stream');
const nodemailer = require('nodemailer');
const { jobApplicant, jobApplicantValidate } = require('../models/jobApplicant');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'recruitment.onboarding541@gmail.com',
        pass: 'ksoa xcxe ohss aiaf',
    }
  });


const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
    gfs = gridfs(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('resume'), async (req, res) => {
    try {
        console.log(req.body);
        // const { error } = jobApplicantValidate(req.body);
        // if (error) {
        //     return res.status(400).send({ message: error.details[0].message });
        // }

        const applicant = await jobApplicant.findOne({ email: req.body.email, jobID: req.body.jobID });
        if (applicant) {
            return res.status(409).send({ message: 'You have already applied for the job' });
        }

        const newApplicant = new jobApplicant({
            name: req.body.name,
            email: req.body.email,
            contact_number: req.body.contact_number,
            gender: req.body.gender,
            city: req.body.city,
            GitHub: req.body.GitHub,
            LinkedIn: req.body.LinkedIn,
            cover_letter: req.body.cover_letter,
            years_of_exp: req.body.years_of_exp,
            skills: req.body.skills,
            education: JSON.parse(req.body.education), 
            experience: JSON.parse(req.body.experience),
            resume: req.file.buffer.toString('base64'),
            rating: req.body.rating,
            stage: req.body.stage,
            jobID: req.body.jobID
        });

        await newApplicant.save();

        res.status(201).send({ message: 'Application Submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
      const applicants = await jobApplicant.find({});
      res.json(applicants);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Applicants' });
    }
});

router.post('/reject', async (req, res) => {
    try {
        console.log(req.body);
        const applicant = await jobApplicant.findOne({ email: req.body.email, jobID: req.body.jobID});
        if (!applicant) {
            return res.status(404).send({ message: "Applicant not found" });
        }

        applicant.stage = req.body.stage;

        await applicant.save();
        res.send({ message: "Applicant status changes successfully", applicant });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Applicants' });
    }
});

router.post('/Interview', async (req, res) => {
    const { recipient, jobID, date, time, note } = req.body;

    try {
        const applicant = await jobApplicant.findOne({ email: recipient, jobID: jobID});
        if (!applicant) {
            return res.status(404).send({ message: "Applicant not found" });
        }

        applicant.stage = "interview";

        await applicant.save();
        
        const mailOptions = {
        from: 'your_email_address',
        to: recipient,
        subject: 'Interview Scheduled',
        text: `Your interview has been scheduled for ${date} at ${time} at Devsinc Head office in Lahore. ${note}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send('Interview email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

module.exports = router;
