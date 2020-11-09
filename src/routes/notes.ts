import { Router } from 'express';
import { createNote, deleteNote, getNotes, getSingleNote } from '../controllers/notes';

const router = Router();

router.route( '/' )
    .get( getNotes )
    .post( createNote );
router.route( '/:id' ).get( getSingleNote ).delete( deleteNote );

export default router;