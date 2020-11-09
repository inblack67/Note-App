import { connect, connection } from 'mongoose';

export const connectDB = async () =>
{
    if ( connection?.readyState === 1 )
    {
        return;
    }
    try
    {
        await connect( process.env.MONGO_URI!, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        } );
        console.log( `Mongo is here`.blue.bold );
    } catch ( err )
    {
        console.error( err );
    }
};