import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import { connectDB } from './utils/connectDB';
import notesRoute from './routes/notes';
import cors from 'cors';
import 'colors';
import errorHandler from './middlewares/errorHandler';
import { getClientURL } from './utils/constants';

const main = async () =>
{
    config( { path: 'config.env' } );

    connectDB();

    const app = express();
    app.use( express.json() );

    app.get( '/', ( _: Request, res: Response ) =>
    {
        res.send( 'API up and running' );
    } );

    app.use( cors( {
        origin: getClientURL(),
        optionsSuccessStatus: 200
    } ) );

    app.use( '/api/notes', notesRoute );

    app.use( errorHandler );

    const PORT = process.env.PORT || 5000;
    app.listen( PORT, () =>
    {
        console.log( `Server started on port ${ PORT }`.green.bold );
    } );
};

main().catch( err => console.error( err ) );