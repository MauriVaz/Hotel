import '../styles/globals.css';
import { AppProps } from 'next/app';
import Menu from '../components/Menu';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Menu />
    <Component {...pageProps} />
  </>
);

export default MyApp;

