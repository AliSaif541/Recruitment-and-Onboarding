const router = require('express').Router();
const { Review, reviewValidate } = require('../models/Review');

router.post('/', async (req, res) => {
  console.log(req.body);
    try {
      const { rating, date, name, role, review } = req.body;
      const newReview = new Review({
        rating,
        date, // Assuming date is in ISO string format or a valid Date object
        name,
        role,
        review
      });
      await newReview.save();
      res.status(201).json({ message: 'Review saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find({});
        if (!reviews) {
        return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
  
module.exports = router;