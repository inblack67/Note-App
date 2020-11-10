import NoteModel from '../models/Note';
import { Request, Response } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import { ErrorResponse } from '../utils/errorResponse';

export const getNotes = asyncHandler(
    async ( _: Request, res: Response ) =>
    {
        const notes = await NoteModel.find();
        res.status( 200 ).json( { success: true, count: notes.length, data: notes } );
        res.end();
    }
);

export const getSingleNote = asyncHandler(
    async ( req: Request, res: Response ) =>
    {
        const note = await NoteModel.findById( req.params?.id );
        if ( !note )
        {
            throw new ErrorResponse( 'No such note exists', 404 );
        }
        res.status( 200 ).json( { success: true, data: note } );
        res.end();
    }
);

export const createNote = asyncHandler(
    async ( req: Request, res: Response ) =>
    {
        const newNote = await NoteModel.create( req.body );
        res.status( 201 ).json( { success: true, data: newNote, msg: 'New note created!' } );
        res.end();
    }
);

export const deleteNote = asyncHandler(
    async ( req: Request, res: Response ) =>
    {
        const note = await NoteModel.findByIdAndDelete( req.params?.id );
        if ( !note )
        {
            throw new ErrorResponse( 'No such note exists', 404 );
        }
        res.status( 200 ).json( { success: true, msg: 'Note deleted!' } );
        res.end();
    }
);