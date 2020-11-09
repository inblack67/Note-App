import Axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { INote } from '../src/interfaces/Note';
import { getServerUrl } from '../src/utils/constants';
import FormatDate from './FormatDate';

type NoteItemPropsType = {
    note: INote;
};

const NoteItem = ( { note: { title, description, _id, createdAt } }: NoteItemPropsType ) =>
{
    const router = useRouter();
    const onDelete = async () =>
    {
        try
        {
            const res = await Axios.delete( `${ getServerUrl() }/api/notes/${ _id }` );
            M.toast( { html: res.data.msg } );
            router.push( '/' );
        } catch ( err )
        {
            console.error( err );
        }
    };
    return (
        <div className='card black white-text'>
            <div className="card-content">
                <span className="card-title red-text">
                    { title }
                </span>
                <p>
                    { description }
                </p>
                <p className="blue-text">
                    <FormatDate createdAt={ createdAt } />
                </p>
            </div>
            <div className="card-action">
                <Link href='/note/:id' as={ `/note/${ _id }` }>
                    <a>
                        Explore
                    </a>
                </Link>
                <a href="#!" className='red-text' onClick={ onDelete }>Delete</a>
            </div>
        </div>
    );
};

export default NoteItem;
