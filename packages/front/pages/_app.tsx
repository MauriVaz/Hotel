import '../styles/globals.css';
import { AppProps } from 'next/app';
import Menu from '../components/Menu';
import { SWRConfig } from 'swr';
import { fetcher } from '../lib/fetcher';
import { UserProvider } from '@auth0/nextjs-auth0';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}>
      <UserProvider>
        <Menu />
        <Component {...pageProps} />
      </UserProvider>
    </SWRConfig>
  </>
);

export default MyApp;
