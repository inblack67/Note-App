import Axios from 'axios';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp ( { Component, pageProps } )
{
  return <Layout>
    <Component { ...pageProps } />
  </Layout>;
}

export default MyApp;
