const router = require('express').Router();
const { Job, jobValidate } = require('../models/job');

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching Jobs' });
  }
});

router.post('/jobPosting', async (req, res) => {
  try {
    const { error } = jobValidate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    await new Job(req.body).save();
    res.status(201).send({ message: "Job Posted successfully!" });
  } catch (err) {
    res.status(500).json({msg: "Internal Server Error"});
  }
});

module.exports = router;