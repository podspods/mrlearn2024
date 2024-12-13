import express from 'express';
import cors from 'cors';
import { createSection, deleteSection, listSection, listSectionByPage, sectionId, updateSection } from './CRUD';
import { Section } from '@irachus/jscommon';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!  /' });
});

// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ section  =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// check api up
app.get('/section', (req, res) => {
  res.json({ message: 'Hello section!' });
});
// -----------------------------------------------------------------------------------------------------------
// list all existing section
app.get('/section/list', async (req, res) => {
  console.log('app.get(/section/list ==>', 30);
  
  const result = await listSection();
  console.log('app.get(/section/listresult ==>', result);
  res.status(200).json({ message: 'Hello section!' , data: result});
});
// -----------------------------------------------------------------------------------------------------------
// list all section by page : page key include project key
app.get('/section/page/:id', async (req, res) => {
  const id = req.params.id;
  console.log('get section page ==>', id, req.params);
  const result = await listSectionByPage(id);
  res.status(200).json({ message: 'success' , data: result});
});
// -----------------------------------------------------------------------------------------------------------
// get section defined by id
app.get('/section/:id', async (req, res) => {
  const id = req.params.id;
  console.log('get section id ==>', id, req.params);
  const result = await sectionId(id);
  res.status(200).json({ message: 'success' , data: result});
});
// -----------------------------------------------------------------------------------------------------------
// update
app.post('/section', async (req, res) => {
  const newSection = { ...req.body };
  const result = await createSection(newSection);
  console.log(' result==>', result);
  res.status(200).json({ message: 'success' , data: result});
});

// -----------------------------------------------------------------------------------------------------------
// update
app.patch('/section', async (req, res) => {
  const newSection : Section = { ...req.body };
  const result = await updateSection(newSection);
  console.log(' result==>', result);
  res.status(200).json({ message: 'success' , data: result});
});
// -----------------------------------------------------------------------------------------------------------
// delete
app.delete('/section/:id', async (req, res) => {
  const id = req.params.id;
  console.log('app.delete id==>', id, req.params);

  const result = await deleteSection(id);
  console.log(' result==>', result);
  res.status(200).json({ message: 'success' , data: result});
});
