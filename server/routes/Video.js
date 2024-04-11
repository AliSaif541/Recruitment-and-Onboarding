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

router.get('/', async (req, res) => {
    const hardcodedVideoId = req.query.hardcodedVideoId;
  
    try {
      const video = await Video.findOne({ _id: hardcodedVideoId });
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
  
      res.json(video);
    } catch (error) {
      console.error('Error fetching video data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/recommended', async (req, res) => {
    const trainingModule = req.query.trainingModule;
  
    try {
      const videos = await Video.find({ trainingModule: trainingModule });
      if (!videos) {
        return res.status(404).json({ error: 'Video not found' });
      }
  
      res.json(videos);
    } catch (error) {
      console.error('Error fetching video data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});
  
  
module.exports = router;