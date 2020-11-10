import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';

const errorHandler = ( err: ErrorResponse, _: Request, res: Response, next: NextFunction ) =>
{
    res.status( err.statusCode || 500 ).json( {
        success: false,
        error: err.message || 'Server Error',
    } );
    res.end();
    next();
};

export default errorHandler;
