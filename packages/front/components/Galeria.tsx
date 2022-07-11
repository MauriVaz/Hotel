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
  const [image, setImage] = useState(cama);
  return (
    <>
      <section className="flex flex-col">
        <div className="mt-10">
          <Image src={image} width={720} height={720} />
        </div>
        <div className="overscroll-auto bg-orange-300">
          <button onClick={() => setImage(cama)} className="p-2">
            <Image alt="cama" src={cama} width={120} height={120} />
          </button>
          <button onClick={() => setImage(circulacion)} className="p-2">
            <Image
              alt="circulacion"
              src={circulacion}
              width={120}
              height={120}
            />
          </button>
          <button onClick={() => setImage(frente)} className="p-2">
            <Image alt="frente" src={frente} width={120} height={120} />
          </button>
          <button onClick={() => setImage(logo)} className="p-2">
            <Image alt="logo" src={logo} width={120} height={120} />
          </button>
          <button onClick={() => setImage(piscina)} className="p-2">
            <Image alt="piscina" src={piscina} width={120} height={120} />
          </button>
          <button onClick={() => setImage(salida)} className="p-2">
            <Image alt="salida" src={salida} width={120} height={120} />
          </button>
          <button onClick={() => setImage(jardin)} className="p-2">
            <Image alt="jardin" src={jardin} width={120} height={120} />
          </button>
          <button onClick={() => setImage(jardin2)} className="p-2">
            <Image alt="jardin" src={jardin2} width={120} height={120} />
          </button>
          <button onClick={() => setImage(fuente)} className="p-2">
            <Image alt="fuente" src={fuente} width={120} height={120} />
          </button>
          <button onClick={() => setImage(fuente)} className="p-2">
            <Image alt="fuente" src={frente2} width={120} height={120} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Galeria;
