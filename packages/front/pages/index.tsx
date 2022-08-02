import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.png';
const indexPage = () => {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <div className="flex flex-col m-10">
        <div className="flex">
          <Image src={logo} width={360} height={240} />
          <p className="ml-5">
            <b>¿Quienes somos?</b>
          </p>
        </div>
      </div>
    </>
  );
};
export default indexPage;
