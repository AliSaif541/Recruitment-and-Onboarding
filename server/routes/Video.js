const router = require('express').Router();
const { Video, videoValidate } = require('../models/Video');

router.post('/', async (req, res) => {
    try {
      const { videoUrl, imageUrl, title, description, trainingModule } = req.body;
      const video = new Video({
        videoUrl,
        imageUrl,
        title,
        description,
        trainingModule
      });
      await video.save();
      res.status(201).json({ message: 'Video information saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;