import express from 'express';
import resize from './routes/image_resize';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is the default gateway. visit "/resize" to resize an image.');
  res.status(200).send;
});
app.use('/resize', resize);

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
export default app;
