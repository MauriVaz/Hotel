import Head from 'next/head';
import Galeria from '../components/Galeria';

const galeria = () => (
  <>
    <Head>
      <title>Galeria</title>
    </Head>
    <p className="ml-4 mt-4 text-red-400">
      <b>Haga click en las fotos para verlas ampliadas</b>
    </p>
    <div className="m-4 flex flex-row justify-center">
      <Galeria />
    </div>
  </>
);

export default galeria;
