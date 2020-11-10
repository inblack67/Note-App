import Axios from "axios";
import Link from "next/link";
import { Fragment } from "react";
import NoteItem from "../components/NoteItem";
import { INote } from "../src/interfaces/Note";
import { getServerUrl } from "../src/utils/constants";

type IndexPropsType = {
  notes: INote[];
};

const index = ( { notes }: IndexPropsType ) =>
{
  return (
    <div className='container'>

      {notes.length > 0 ? <Fragment>
        <p className="flow-text center">Notes: <span className="red-text">
          { notes.length }</span></p>
        {
          notes.map( ( note ) => <NoteItem key={ note._id } note={ note } /> )
        }
      </Fragment> : <div className='center'>
          <p className="flow-text center">No notes yet.</p>
          <Link href='/create-note'>
            <a className='btn black'>
              Create Note
          </a>
          </Link>
        </div> }
    </div>
  );
};

export const getServerSideProps = async () =>
{
  try
  {
    const res = await Axios.get( `${ getServerUrl() }/api/notes` );
    return { props: { notes: res.data.data } };
  } catch ( err )
  {
    console.error( err );
    return { props: {} };
  }
};

export default index;
