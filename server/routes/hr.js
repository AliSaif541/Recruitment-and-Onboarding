const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Added bcrypt
const { HR, hrValidate } = require('../models/HR');

router.post('/', async (req, res) => {
  try {
    let user = await HR.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: `User does not exist` });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid password' });
    }
    
    const token = jwt.sign(
      { _id: user._id, role: user.role, email: user.email, name: user.name},
      'DB-Proj',
      { expiresIn: '1h' }
    );
    
    res.status(200).send({ data: token, message: `Logged in successfully!` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { error } = hrValidate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password

    const hr = await HR.findOne({ email: req.body.email });
    if (hr) {
        return res.status(409).send({ message: 'User already exists!' });
    }

    req.body.password = hashedPassword; // Set hashed password
    await new HR(req.body).save();
    res.status(201).send({ message: "User created successfully!" });

  } catch (err) {
    res.status(500).json({msg: "Internal Server Error"});
  }
});

module.exports = router;
