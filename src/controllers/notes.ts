import NoteModel from '../models/Note';
import { Request, Response } from 'express';

export const getNotes = async ( _: Request, res: Response ) =>
{
    const notes = await NoteModel.find();
    res.status( 200 ).json( { success: true, count: notes.length, data: notes } );
    res.end();
};

export const getSingleNote = async ( req: Request, res: Response ) =>
{
    const note = await NoteModel.findById( req.params?.id );
    if ( !note )
    {
        res.status( 400 ).json( { success: false, error: 'No such note exists' } );
        res.end();
    }
    res.status( 200 ).json( { success: true, data: note } );
    res.end();
};

export const createNote = async ( req: Request, res: Response ) =>
{
    const newNote = await NoteModel.create( req.body );
    res.status( 201 ).json( { success: true, data: newNote, msg: 'New note created!' } );
    res.end();
};

export const deleteNote = async ( req: Request, res: Response ) =>
{
    const note = await NoteModel.findByIdAndDelete( req.params?.id );
    if ( !note )
    {
        res.status( 400 ).json( { success: false, error: 'No such note exists' } );
        res.end();
    }
    res.status( 200 ).json( { success: true, msg: 'Note deleted!' } );
    res.end();
};