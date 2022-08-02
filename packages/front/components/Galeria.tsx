import Image from 'next/image';
import { useState } from 'react';
import cama from '../assets/galería/cama.jpeg';
import circulacion from '../assets/galería/circulación.jpeg';
import frente from '../assets/galería/frente.jpeg';
import frente2 from '../assets/galería/frente2.jpeg';
import fuente from '../assets/galería/fuente.jpeg';
import jardin from '../assets/galería/jardin.jpeg';
import jardin2 from '../assets/galería/jardin2.jpeg';
import logo from '../assets/galería/logo.jpeg';
import piscina from '../assets/galería/piscina.jpeg';
import salida from '../assets/galería/salida.jpeg';
const Galeria = () => {
  const [number, setNumber] = useState(0);
  const images = [
    cama,
    circulacion,
    frente,
    frente2,
    fuente,
    jardin,
    jardin2,
    logo,
    piscina,
    salida,
  ];
  return (
    <>
      <div className="flex flex-col p-2 overscroll-auto border-4 border-gray-500">
        <Image src={images[number]} width={720} height={720} />
      </div>
      <div>
        <button onClick={() => setNumber(0)} className="p-2">
          <Image alt="cama" src={images[0]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(1)} className="p-2">
          <Image alt="circulacion" src={images[1]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(2)} className="p-2">
          <Image alt="frente" src={images[2]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(3)} className="p-2">
          <Image alt="logo" src={images[3]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(4)} className="p-2">
          <Image alt="piscina" src={images[4]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(5)} className="p-2">
          <Image alt="salida" src={images[5]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(6)} className="p-2">
          <Image alt="jardin" src={images[6]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(7)} className="p-2">
          <Image alt="jardin" src={images[7]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(8)} className="p-2">
          <Image alt="fuente" src={images[8]} width={120} height={120} />
        </button>
        <button onClick={() => setNumber(9)} className="p-2">
          <Image alt="fuente" src={images[9]} width={120} height={120} />
        </button>
      </div>
    </>
  );
};

export default Galeria;
