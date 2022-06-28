import Link from 'next/link';

const page404 = () => {
  return (
    <>
      <div className="ml-10 mr-10 rounded-lg p-4 border-2 border-blue-600 w-auto h-auto text-center mt-20">
        <p className="text-red-400 font-bold text-2xl">ERROR 404</p>
        <p className="mt-20">
          Hemos buscado a conciencia pero no hemos encontrado la página que
          deseas
        </p>
        <p>Le recomendamos visitar alguna de las siguientes páginas:</p>
        <section className="mt-10 text-white mb-10">
          <ul>
            <li className="mt-8">
              <Link href={'/'}>
                <span className="bg-cyan-400 rounded-3xl p-4 cursor-pointer hover:bg-cyan-600">
                  Home
                </span>
              </Link>
            </li>
            <li className="mt-8">
              <Link href={'/rooms'}>
                <span className="bg-cyan-400 rounded-3xl p-4 cursor-pointer hover:bg-cyan-600">
                  Habitaciones
                </span>
              </Link>
            </li>
            <li className="mt-8">
              <Link href={'/'}>
                <span className="bg-cyan-400 rounded-3xl p-4 cursor-pointer hover:bg-cyan-600">
                  Valoraciones
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default page404;
