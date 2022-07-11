import Head from 'next/head';
import Galeria from '../components/Galeria';

const galeria = () => (
  <>
    <Head>
      <title>Galeria</title>
    </Head>
    <div className="flex flex-row justify-center">
      <div className="flex-col">
        <Galeria />
      </div>
    </div>
  </>
);

export default galeria;
