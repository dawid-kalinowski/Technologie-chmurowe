const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis',
  port: 6379
})

app.post('/message/:key', (req, res) => {
  const { key } = req.params;
  const { message } = req.body;

  client.set(key, message, (err, reply) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Message added to Redis');
    }
  });
});

app.get('/message/:key', (req, res) => {
  const { key } = req.params;

  client.get(key, (err, reply) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!reply) {
      res.status(404).send('Message not found');
    } else {
      res.send(reply);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
