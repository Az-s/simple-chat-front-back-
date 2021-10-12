const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

// router.get('/', (req, res) => {

//   const messages = fileDb.getItems();
//   res.send(messages);

// });

router.get('/', (req, res) => {

  const date = req.query.dateTime;
  if (Object.keys(req.query).length !== 0) {
      const date2 = new Date(req.query.dateTime);

      if (isNaN(date2.getDate()) || req.query.dateTime === '') {
          res.status(400).send();

      } else {
          const arr = fileDb.getItems();
          const arr2 = arr.filter(item => item.dateTime > date);
          res.send(arr2);
      }

  } else {
      res.send(fileDb.getItems());
  }
});

router.post('/', (req, res) => {
  if (!req.body.author || !req.body.message) {
    return res.status(400).send({ error: 'Author and message must be present in the request' });
  }

  const newMessage = fileDb.addItem({
    author: req.body.author,
    message: req.body.message,
  });

  res.send(newMessage);
});

module.exports = router;