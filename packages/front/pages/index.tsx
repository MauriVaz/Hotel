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
          <div className="ml-5">
            <b>¿Quienes somos?</b>
            <p>
              Somos una empresa situada en Guadalajara que tiene el objetivo de
              brindar un servicio de motel
            </p>
            <p>
              Actualmente contamos con 33 habitaciones para todos los gustos,
              para más información de estas puede consultar la sección de
              habitaciones, 30 de ellas sencillas, 2 con jacuzzi y una con
              alberca
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default indexPage;
