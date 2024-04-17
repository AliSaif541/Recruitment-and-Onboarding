const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Added bcrypt
const { HR, hrValidate } = require('../models/HR');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    let user = await HR.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: `User does not exist` });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid password' });
    }

    if (user.verified === 0) {
      return res.status(401).send({ message: 'Please verify your email' });
    }
    
    const token = jwt.sign(
      { _id: user._id, role: user.role, email: user.email, name: user.name},
      'DB-Proj',
      { expiresIn: '1h' }
    );
    
    res.status(200).send({ data: token, message: `Logged in successfully!` });
  } catch (err) {
    console.log("error: ", err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { error } = hrValidate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const hr = await HR.findOne({ email: req.body.email });
    if (hr) {
        return res.status(409).send({ message: 'User already exists!' });
    }

    req.body.password = hashedPassword;
    await new HR(req.body).save();
    res.status(201).send({ message: "User created successfully!" });

  } catch (err) {
    res.status(500).json({msg: "Internal Server Error:", err});
  }
});

router.post('/verify', async (req, res) => {
  try {
      const hr = await HR.findOne({ email: req.body.email });
      if (hr) {
          return res.status(409).send({ message: 'User not found!' });
      }

      hr.verified = req.body.verified;

      await hr.save();
      res.send({ message: "Employee verified successfully", hr });
  } catch (error) {
      res.status(500).json({ message: 'Error verifying Employee' });
  }
});

router.get('/unverified', async (req, res) => {
  try {
    const unverifiedPeople = await HR.find({ verified: 0 });
    res.status(200).send({ data: unverifiedPeople });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/update-verification', async (req, res) => {
  try {
    const { _id, verified } = req.body;

    const person = await HR.findById(_id);
    if (!person) {
      return res.status(404).send({ message: 'Person not found' });
    }
    person.verified = verified;

    await person.save();
    res.status(200).send({ message: 'Verification status updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
