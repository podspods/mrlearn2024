import { Router, Request, Response } from 'express';
import SectionModel from '../models/section';

const router = Router();

// GET all sections
router.get('/', async (req: Request, res: Response) => {
  try {
    const sections = await SectionModel.find();
    res.json(sections);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// GET a section by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const section = await SectionModel.findById(req.params.id);
    if (!section) return res.status(404).json({ message: 'Section not found' });
    res.json(section);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new section
router.post('/', async (req: Request, res: Response) => {
  const { title, content } = req.body;

  const section = new SectionModel({
    title,
    content,
  });

  try {
    const newSection = await section.save();
    res.status(201).json(newSection);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a section by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    const updatedSection = await SectionModel.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedSection) return res.status(404).json({ message: 'Section not found' });
    res.json(updatedSection);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a section by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedSection = await SectionModel.findByIdAndDelete(req.params.id);

    if (!deletedSection) return res.status(404).json({ message: 'Section not found' });
    res.json({ message: 'Section deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
