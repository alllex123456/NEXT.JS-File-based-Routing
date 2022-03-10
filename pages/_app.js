import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { Fragment } from 'react/cjs/react.production.min';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
