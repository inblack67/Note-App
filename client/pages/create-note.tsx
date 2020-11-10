import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { INote } from '../src/interfaces/Note';
import { getServerUrl } from '../src/utils/constants';
import { useRouter } from 'next/router';

const CreateNote = () =>
{
    const router = useRouter();
    const { handleSubmit, register } = useForm<INote>( {
        defaultValues: {
            title: 'Some Title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt.'
        }
    } );

    const createNote = async ( data: INote ) =>
    {
        try
        {
            const res = await Axios.post( `${ getServerUrl() }/api/notes`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            } );
            M.toast( { html: res.data?.msg } );
            router.push( `/note/${ res.data.data._id }` );
        } catch ( err )
        {
            console.error( err );
            if ( err.response !== undefined )
            {
                M.toast( { html: err.response.data.error } );
            }
            else
            {
                M.toast( { html: 'Something went wrong' } );
            }
        }
    };

    return (
        <div className='container'>
            <form onSubmit={ handleSubmit( createNote ) }>
                <div className="input-field">
                    <input type="text" name='title' ref={ register( {
                        required: true
                    } ) } required maxLength={ 20 } minLength={ 5 } />
                    <span className="helper-text">
                        Title
                    </span>
                </div>
                <div className="input-field">
                    <input type="text" name='description' ref={ register( {
                        required: true
                    } ) } required maxLength={ 500 } minLength={ 10 } />
                    <span className="helper-text">Description</span>
                </div>
                <div className="input-field">
                    <button type="submit" className='btn black'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default CreateNote;
