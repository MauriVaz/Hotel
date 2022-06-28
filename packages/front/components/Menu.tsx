import Link from 'next/link';
import React from 'react';

const Menu = () => (
  <div className="rounded-full p-5 bg-gray-400">
    <ul className="flex flex-row justify-between text-white font-bold">
      <li className="border-4 p-2 rounded-full border-gray-600 hover:bg-gray-600">
        <Link href="/">Inicio</Link>
      </li>
      <li className="border-4 p-2 rounded-full border-gray-600 hover:bg-gray-600">
        <Link href="/rooms">Habitaciones</Link>
      </li>
      <li className="border-4 p-2 rounded-full border-gray-600 hover:bg-gray-600">
        <Link href="/valorations">Valoraciones</Link>
      </li>
      <li className="border-4 p-2 rounded-full border-gray-600 hover:bg-gray-600">
        <Link href="/adultos">Zona adultos</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
