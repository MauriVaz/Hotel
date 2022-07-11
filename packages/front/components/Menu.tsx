import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.png';
import { LoginButton } from './LoginButton';

const Menu = () => (
  <div className="p-5 bg-gray-100">
    <ul className="flex flex-row align-middle justify-between text-black font-bold">
      <li className="cursor-pointer">
        <Link href="/">
          <Image src={logo} width={120} height={40} />
        </Link>
      </li>
      <li className=" p-2">
        <Link href="/roomsPage">Habitaciones</Link>
      </li>
      <li className="p-2">
        <Link href="/valorationsPage">Valoraciones</Link>
      </li>
      <li className="p-2">
        <Link href="/galeria">Galería</Link>
      </li>
      <li className="p-2">
        <LoginButton />
      </li>
    </ul>
  </div>
);

export default Menu;
