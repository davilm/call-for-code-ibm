import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'tudo ok'})
})

app.listen(3333, () => {
  console.log("server started on port 3333")
})
