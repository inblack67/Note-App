import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';

export const errorHandler = ( err: any, _: Request, res: Response, next: NextFunction ) =>
{

    let error = { ...err };
    error.message = err.message;

    console.log( error );

    if ( err.name === 'CastError' )
    {
        const message = `Resource not found`;
        error = new ErrorResponse( message, 404 );
    }

    // mongoose duplicate key
    if ( err.code === 11000 )
    {
        const message = `Resource already exists`;
        error = new ErrorResponse( message, 400 );
    }

    res.status( error.statusCode || 500 ).json( {
        success: false,
        error: error.message || 'Server Error'
    } );

    next();
};
