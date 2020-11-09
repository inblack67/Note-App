import Axios from "axios";
import { getServerUrl } from "../src/utils/constants";


const index = ( { notes } ) =>
{
  return (
    <div className='container'>
      <p className="flow-text center">Notes</p>
      {notes ? <pre>
        { JSON.stringify( notes, null, 3 ) }
      </pre> : null }
    </div>
  );
};

export const getServerSideProps = async () =>
{
  try
  {
    const res = await Axios.get( `${ getServerUrl() }/api/notes` );
    return { props: { notes: res.data } };
  } catch ( err )
  {
    console.error( err );
    return { props: {} };
  }
};

export default index;
