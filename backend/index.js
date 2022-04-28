import express from 'express';

const app = express();
const port = 3000;

app.get('/*', (req, res) => {
  res.send({
    date: new Date(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
