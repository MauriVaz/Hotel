import Head from 'next/head';
import Image from 'next/image';
import main from '../assets/main.jpeg';
const indexPage = () => {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <p className="p-5">Hola mundo desde el index</p>
      <div className="flex justify-center">
        <Image src={main} width={360} height={240} />
        <p className="ml-5">
          Somos una empresa situada en Av. Cristóbal Colón 3610, Villa Guerrero,
          44987 Guadalajara, Jal.
        </p>
      </div>
    </>
  );
};
export default indexPage;
