const router = require('express').Router();
const { trainingModule, moduleValidate } = require('../models/TrainingModules');

router.get('/', async (req, res) => {
    try {
      const modules = await trainingModule.find({});
      res.json(modules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Jobs' });
    }
  });

router.get('/module', async (req, res) => {  
    try {
      const module = await trainingModule.findOne({ name: req.query.name });
      if (!module) {
        return res.status(404).json({ error: 'Training Module not found' });
      }
  
      res.json(video);
    } catch (error) {
      console.error('Error fetching Training Module:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;