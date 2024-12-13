import express from 'express';
import cors from 'cors';
import { Slide } from '@irachus/jscommon';
import {
  createSlide,
  deleteSlide,
  listSlide,
  listSlideByPage,
  reorgSlide,
  slideId,
  updateSlide
} from './CRUD';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World carousel!  /' });
});

// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ Carousel  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// check api up
app.get('/slide', (req, res) => {
  res.json({ message: 'Hello Carousel!' });
});
// -----------------------------------------------------------------------------------------------------------
// list all existing Carousel
app.get('/slide/list', async (req, res) => {

  const result = await listSlide();
  res.status(200).json({ message: 'success', data: result });
});
// -----------------------------------------------------------------------------------------------------------
// list Carousel by page : page key include project key
app.get('/slide/page/:id', async (req, res) => {
  const id = req.params.id;
  const result = await listSlideByPage(id);
  res.status(200).json({ message: 'success', data: result });
});
// -----------------------------------------------------------------------------------------------------------
// get Carousel defined by id
app.get('/slide/:id', async (req, res) => {
  const id = req.params.id;
  const result = await slideId(id);
  res.status(200).json({ message: 'success', data: result });
});
// -----------------------------------------------------------------------------------------------------------
// create
app.post('/slide', async (req, res) => {
  const newCarousel = { ...req.body };
  const result = await createSlide(newCarousel);
  res.status(200).json({ message: 'success', data: result });
});

// -----------------------------------------------------------------------------------------------------------
// update
app.patch('/slide', async (req, res) => {
  const newCarousel: Slide = { ...req.body };
  const result = await updateSlide(newCarousel);
  res.status(200).json({ message: 'success', data: result });
});
// -----------------------------------------------------------------------------------------------------------
// delete
app.delete('/slide/:id', async (req, res) => {
  const id = req.params.id;
  const result = await deleteSlide(id);
  res.status(200).json({ message: 'success', data: result });
});
// -----------------------------------------------------------------------------------------------------------
// get Carousel defined by id
app.get('/slide/reorg/:pageId', async (req, res) => {
  const pageId = req.params.pageId;
  const result = await reorgSlide(pageId);
  res.status(200).json({ message: 'success', data: result });
});
// --
