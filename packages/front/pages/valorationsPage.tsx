import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import CircularProgress from '@mui/material/CircularProgress';
import ListValorations from '../components/ListValorations';
import FormValoration from '../components/FormValoration';
const valorationsPage = () => {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Valoraciones</title>
      </Head>

      <div className="overscroll flex justify-center">
        <div>
          <p className="mt-6 mb-6">
            <b>
              Estas son las valoraciones existentes hechas por nuestros usuarios
            </b>
          </p>
          <section>
            {isLoading && <CircularProgress />}
            {!user && (
              <p className="m-5">
                Para ver los comentarios debe iniciar sesión
              </p>
            )}
            <ListValorations />
            <FormValoration />
          </section>
        </div>
      </div>
    </>
  );
};

export default valorationsPage;
