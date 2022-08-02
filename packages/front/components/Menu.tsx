import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.png';
import { LoginButton } from './LoginButton';
import MenuIcon from './MenuIcon';
import Toogle from './Toogle';
const Menu = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="p-5 justify-around bg-gray-100">
      <div className="sm:visible md:hidden">
        <button onClick={() => setValue(!value)}>
          <MenuIcon />
        </button>
        {value && (
          <ul className="flex flex-col text-black font-bold">
            <li className="cursor-pointer">
              <Link href="/">
                <Image src={logo} width={120} height={40} />
              </Link>
            </li>
            <li className="p-2">
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
            <li>
              <Toogle />
            </li>
          </ul>
        )}
      </div>
      <ul className="md:visible lg:visible invisible flex flex-row text-black font-bold">
        <li className="cursor-pointer">
          <Link href="/">
            <Image src={logo} width={120} height={40} />
          </Link>
        </li>
        <li className="p-2">
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
        <div className="flex align-end">
          <Toogle />
        </div>
      </ul>
    </div>
  );
};

export default Menu;
