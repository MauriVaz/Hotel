import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.png';
import { LoginButton } from './LoginButton';
import MenuIcon from './MenuIcon';
import { useTheme } from 'next-themes';
import Dark from './Dark';
import Sun from './Sun';
const Menu = () => {
  const [value, setValue] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-5 justify-around bg-gray-100">
      <div className="sm:visible md:hidden">
        <button onClick={() => setValue(!value)}>
          <MenuIcon />
        </button>
        {value && (
          <ul className="flex flex-row text-black font-bold">
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
        <div>
          <button
            onClick={() => {
              theme === 'light' ? setTheme('dark') : setTheme('light');
            }}>
            {theme === 'light' ? <Dark /> : <Sun />}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
