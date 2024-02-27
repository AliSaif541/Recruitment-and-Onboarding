const router = require('express').Router();
const { Job, jobValidate } = require('../models/job');

router.get('/', async (req, res) => {
  try {
    console.log("hello")
    const jobs = await Job.find({});
    res.json(jobs);
    console.log(jobs);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching Jobs' });
  }
});

module.exports = router;