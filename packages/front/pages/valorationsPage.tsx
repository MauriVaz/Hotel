import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import CircularProgress from '@mui/material/CircularProgress';
import ListValorations from '../components/ListValorations';
const valorationsPage = () => {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Valoraciones</title>
      </Head>

      <div className="flex justify-center">
        <div>
          <p className="mt-6 mb-6">
            <b>
              Estas son las valoraciones existentes hechas por nuestros usuarios
            </b>
          </p>
          <section>
            {isLoading ? (
              <CircularProgress />
            ) : (
              !user && <p>No tiene permisos para ver las valoraciones</p>
            )}
            <ListValorations />
          </section>
        </div>
      </div>
    </>
  );
};

export default valorationsPage;
