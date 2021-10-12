const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

router.get('/', (req, res) => {
  const messages = fileDb.getItems();
  res.send(messages);
});

router.post('/', (req, res) => {
  if (!req.body.author || !req.body.message) {
    return res.status(400).send({error: 'Author and message must be present in the request'});
  }

  const newMessage = fileDb.addItem({
    author: req.body.author,
    message: req.body.message,
    // id: req.body.id,
    datetime: req.body.datetime,
  });

  res.send(newMessage);
});

module.exports = router; 