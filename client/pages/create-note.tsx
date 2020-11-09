import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { INote } from '../src/interfaces/Note';
import { serverUrl } from '../src/utils/constants';

const CreateNote = () =>
{
    const { handleSubmit, register } = useForm<INote>( {
        defaultValues: {
            title: 'Some Title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt quod voluptas placeat sed. Ipsa exercitationem corporis dolor modi iusto.'
        }
    } );

    const createNote = async ( data: INote ) =>
    {
        console.log( serverUrl );
        const res = await Axios.post( `${ serverUrl }/api/note`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        } );
        M.toast( { html: res.data?.msg } );
    };

    return (
        <div className='container'>
            <form onSubmit={ handleSubmit( createNote ) }>
                <div className="input-field">
                    <input type="text" name='title' ref={ register( {
                        required: true
                    } ) } />
                    <span className="helper-text">
                        Title
                    </span>
                </div>
                <div className="input-field">
                    <input type="text" name='description' ref={ register( {
                        required: true
                    } ) } />
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
