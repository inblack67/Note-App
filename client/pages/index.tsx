import Axios from "axios";
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
      <p className="flow-text center">Notes</p>
      {notes.length > 0 ? notes.map( ( note ) => <NoteItem key={ note._id } note={ note } /> ) : null }
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
