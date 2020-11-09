import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './utils/connectDB';
import notesRoute from './routes/notes';
import cors from 'cors';
import 'colors';

const main = async () =>
{
    config( { path: 'config.env' } );

    connectDB();

    const app = express();
    app.use( express.json() );

    app.use( cors() );

    app.use( '/api/notes', notesRoute );

    const PORT = process.env.PORT || 5000;
    app.listen( PORT, () =>
    {
        console.log( `Server started on port ${ PORT }`.green.bold );
    } );
};

main().catch( err => console.error( err ) );