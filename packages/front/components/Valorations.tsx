import Image from 'next/image';
import React from 'react';
import cincoestrellas from '../assets/estrellas/cincoestrellas.png';
import cuatroymedia from '../assets/estrellas/cuatroymedia.png';
import cuatro from '../assets/estrellas/cuatro.png';
import tresymedia from '../assets/estrellas/tresymedia.png';
import tres from '../assets/estrellas/tres.png';
import dosymedia from '../assets/estrellas/dosymedia.png';
import dos from '../assets/estrellas/dos.png';
import unaymedia from '../assets/estrellas/unaymedia.png';
import una from '../assets/estrellas/una.png';
import ceroymedia from '../assets/estrellas/ceroymedia.png';
import cero from '../assets/estrellas/cero.png';

const Valorations = ({ textValoration, stars, date }: any) => (
  <>
    <div className="flex shadow-lg">
      <section className="flex-col p-4 mt-4 mb-4 border-4 border-cyan-500">
        <p>{textValoration} </p>
        {stars == '5' && <Image src={cincoestrellas} width={120} height={20} />}
        {stars == '4.5' && <Image src={cuatroymedia} width={120} height={20} />}
        {stars == '4' && <Image src={cuatro} width={120} height={20} />}
        {stars == '3.5' && <Image src={tresymedia} width={120} height={20} />}
        {stars == '3' && <Image src={tres} width={120} height={20} />}
        {stars == '2.5' && <Image src={dosymedia} width={120} height={20} />}
        {stars == '2' && <Image src={dos} width={120} height={20} />}
        {stars == '1.5' && <Image src={unaymedia} width={120} height={20} />}
        {stars == '1' && <Image src={una} width={120} height={20} />}
        {stars == '0.5' && <Image src={ceroymedia} width={120} height={20} />}
        {stars == '0' && <Image src={cero} width={120} height={20} />}
        <p>Fecha: {date.toString().substring(0, 10)}</p>
        <p>Hora: {date.toString().substring(11, 19)} </p>
      </section>
    </div>
  </>
);

export default Valorations;
