const router = require('express').Router();
const multer = require('multer');
const mongoose = require('mongoose');
const gridfs = require('gridfs-stream');
const nodemailer = require('nodemailer');
const { jobApplicant, jobApplicantValidate } = require('../models/jobApplicant');
const { Job, jobValidate } = require('../models/job');
const { jobRecruiter } = require('../ML-Algo/Final_ML_RATING')
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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
        
        const job = await Job.findOne({ _id: req.body.jobID });
        if (!job) {
            return res.status(404).send({ message: "Job not found" });
        }

        // const score = jobRecruiter(
        //     job.skillsNeeded,
        //     job.description,
        //     job.requirements,
        //     job.job_type,
        //     req.body.years_of_exp,
        //     req.body.education,
        //     req.body.experience,
        //     req.body.skills,
        //     req.body.cover_letter
        // )
        const score = 50;

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
            rating: (score/100)*5,
            stage: req.body.stage,
            jobID: req.body.jobID
        });
        await newApplicant.save();

        const mailOptions = {
            from: 'your_email_address',
            to: req.body.email,
            subject: 'Acknowledgement of Application',
            text: `Dear Candidate,\n\nWe would like to acknowledge that we have received your application and we sincerely appreciate your interest in our company.\n\nWe will review all applications and select the candidates whose qualifications best match our requirements. Please note that it may take some time to process all applications. We will carefully consider your application and contact you if you are selected to continue in the recruitment process. If your profile is not shortlisted at this time, you don't have to worry; we will keep it in our database for future reference.\n\nWe encourage you to view our job postings regularly as new positions are posted frequently on our website, career page, or on our LinkedIn page.\n\nThank you. \n\nBest Regards.\nHuman Resource Department\nDevsinc`
        };
        await transporter.sendMail(mailOptions);

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
        const applicant = await jobApplicant.findOne({ email: req.body.email, jobID: req.body.jobID});
        if (!applicant) {
            return res.status(404).send({ message: "Applicant not found" });
        }

        applicant.stage = req.body.stage;

        const jobName = await Job.findOne({ _id: req.body.jobID });
        if (!jobName) {
            return res.status(404).send({ message: "Job not found" });
        }

        const mailOptions = {
            from: 'your_email_address',
            to: req.body.email,
            subject: `Application Status: ${jobName.name}`,
            text: `Dear Candidate,\n\nWe regret to inform you that after careful consideration, we have decided not to proceed with your application for the position of ${jobName.name} at ${jobName.company}.\n\nWe received a high number of qualified applications, and unfortunately, we are unable to offer you a position at this time. However, we appreciate the time and effort you invested in the application process.\n\nYour resume will be kept in our database for future reference, and we encourage you to apply for other suitable positions that match your qualifications and experience in the future.\n\nThank you for your interest in joining our team and for considering ${jobName.company} as a potential employer.\n\nWe wish you all the best in your job search and future endeavors.\n\nBest Regards.\n\nHuman Resource Department\n${jobName.company}`
        };
        await transporter.sendMail(mailOptions);

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

        const jobName = await Job.findOne({ _id: jobID });
        if (!applicant) {
            return res.status(404).send({ message: "Job not found" });
        }
        
        const mailOptions = {
            from: 'your_email_address',
            to: recipient,
            subject: 'Interview Invitation',
            text: `Dear Candidate,\n\nWe are pleased to inform you that you have been selected for an interview for the position at Devsinc.\n\nInterview Details:\nDate: ${date}\nTime: ${time}\nLocation: ${jobName.company} Head office, Lahore\n\nPlease confirm your availability for the scheduled interview by replying to this email at your earliest convenience.\n\n${note}\n\nThank you for your interest in joining our team. We appreciate your time and consideration.\n\nBest Regards.\n\nHuman Resource Department\n${jobName.company}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send('Interview email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

module.exports = router;
