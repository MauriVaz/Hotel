import Link from 'next/link';
import Location from './Location';
import Phone from './Phone';

const Footer = () => (
  <div className="relative bottom-0 p-2 w-full border-4 rounded-xl hover:bg-gray-700 hover:text-white border-gray-500 bg-gray-500">
    <div className="flex flex-row justify-around">
      <div className="flex flex-col ">
        <b className="mb-3">Contacto</b>
        <div className="flex">
          <Location />
          <Link
            href={
              'https://www.google.com/maps/place/Motel+Villa+las+Fuentes/@20.6275894,-103.3870535,17z/data=!3m1!4b1!4m8!3m7!1s0x8428ada32b384fd3:0xf9fb0c21fec0b773!5m2!4m1!1i2!8m2!3d20.627583!4d-103.3848605'
            }>
            Dirección: Av. Cristóbal Colón 3610, Villa Guerrero, 44987
            Guadalajara
          </Link>
        </div>
        <div className="flex">
          <Phone />
          <p>Teléfono: (+52) 3333670292</p>
        </div>
      </div>
      <div className="flex flex-col "></div>
    </div>
  </div>
);

export default Footer;
