import { Router } from 'express';
import { createNote, deleteNote, getNotes } from '../controllers/notes';

const router = Router();

router.route( '/' )
    .get( getNotes )
    .post( createNote );
router.route( '/:id' ).delete( deleteNote );

export default router;