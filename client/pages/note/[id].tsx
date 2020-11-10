import { NextPageContext } from 'next';
import Axios from 'axios';
import { getServerUrl } from '../../src/utils/constants';
import NoteItem from '../../components/NoteItem';
import Link from 'next/link';

const SingleNote = ( { note } ) =>
{
    return (
        <div className="container">
            <p className="flow-text center">Single Note</p>
            {note ? <NoteItem note={ note } /> :
                null }
            <div className='center'>
                <Link href='/'>
                    <a className='btn red'>Go Home</a>
                </Link>
            </div>
        </div>
    );
};

export const getServerSideProps = async ( ctx: NextPageContext ) =>
{
    const res = await Axios.get( `${ getServerUrl() }/api/notes/${ ctx.query.id }` );

    return { props: { note: res.data.data } };
};

export default SingleNote;
