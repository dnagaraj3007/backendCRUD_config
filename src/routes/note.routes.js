import express from 'express';
import notes from '../controllers/note.controller.js';
const router = express.Router();

router.get('/notes', notes.findAll);
router.post('/notes', notes.create);
router.get('/notes/:noteId', notes.findOne);
router.put('/notes/:noteId', notes.updateNote);
router.delete('/notes/:noteId', notes.deleteNote);

export default router;
