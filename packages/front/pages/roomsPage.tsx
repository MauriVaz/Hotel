import Head from 'next/head';
import Image from 'next/image';
import sencilla from '../assets/habitaciones/sencilla.png';
import jacuzzi from '../assets/habitaciones/jacuzzi.png';
import alberca from '../assets/habitaciones/alberca.png';
const rooms = () => {
  return (
    <>
      <Head>
        <title>Habitaciones</title>
      </Head>

      <p className="mt-4 ml-4 text-red-400">
        <b>Estos son nuestras habitaciones, tenemos para todos los gustos</b>
      </p>
      <div className="m-10 flex flex-col md:flex-row md:justify-center">
        <div className="p-4 mr-4 border-4 border-gray-400 max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={sencilla}
            alt="Habitación sencilla"
            width={360}
            height={360}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Habitación normal</div>
            <p className="text-gray-700 text-base">Precio: $360</p>
            <p>
              Cuenta con una cama king size, Tv a color aire acondicionado y
              sillón camasutra
            </p>
          </div>
        </div>
        <div className="p-4 mr-4 border-4 border-gray-400 max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={jacuzzi}
            alt="Habitación con jacuzzi"
            width={360}
            height={360}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Habitación jacuzzi</div>
            <p className="text-gray-700 text-base">Precio: $550</p>
            <p>
              Cuenta con una cama king size, Tv a color aire acondicionado,
              sillón camasutra y jacuzzi
            </p>
          </div>
        </div>
        <div className="p-4 mr-4 border-4 border-gray-400 max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={alberca}
            alt="Habitación con alberca"
            width={360}
            height={360}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Habitación alberca</div>
            <p className="text-gray-700 text-base">Precio: $1500</p>
            <p>
              Cuenta con una cama king size, Tv a color aire acondicionado,
              sillón camasutra y alberca
            </p>
          </div>
        </div>
      </div>

      <p className="font-bold mt-5 mb-5 text-center animate-pulse">
        *Precios sujetos a cambios
      </p>
    </>
  );
};
export default rooms;
