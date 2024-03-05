const router = require('express').Router();
const multer = require('multer');
const mongoose = require('mongoose');
const gridfs = require('gridfs-stream');
const { jobApplicant, jobApplicantValidate } = require('../models/jobApplicant');

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
        const { error } = jobApplicantValidate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        const applicant = await jobApplicant.findOne({ email: req.body.email, jobID: req.body.jobID });
        if (applicant) {
            return res.status(409).send({ message: 'You have already applied for the job' });
        }

        const newApplicant = new jobApplicant({
            name: req.body.name,
            email: req.body.email,
            contact_number: req.body.contact_number,
            cover_letter: req.body.cover_letter,
            years_of_exp: req.body.years_of_exp,
            education: req.body.education,
            experience: req.body.experience,
            resume: req.file.buffer.toString('base64'),
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

module.exports = router;
