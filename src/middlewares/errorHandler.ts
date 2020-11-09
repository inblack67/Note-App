import { Request, Response } from 'express';
import { ErrorResponse } from '../utils/errorResponse';

const errorHandler = ( err: ErrorResponse, _: Request, res: Response ) =>
{
    res.status( err.statusCode || 500 ).json( {
        success: false,
        error: err.message || 'Server Error',
    } );
    res.end();
};

export default errorHandler;
