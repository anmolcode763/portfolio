const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const c = new Contact(req.body);
    await c.save();
    res.status(201).json({ message: 'Message received' });
  } catch (err) {
    res.status(400).json({ message: 'Bad request' });
  }
};