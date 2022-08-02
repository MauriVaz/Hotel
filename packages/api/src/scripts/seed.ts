import { conectDB } from '../lib/db';
import mongoose from 'mongoose';
import { Valorations } from '../models/valorations.model';

(async () => {
  await conectDB();
  try {
    await Valorations.collection.drop();
  } catch (error) {
    console.log('There are nothing to drop from db');
  }

  await Valorations.create({
    textValoration: 'Experiencia muy agradable en el hotel',
    stars: 4.5,
  });
  await Valorations.create({
    textValoration: 'El servicio prestado fue muy agradable',
    stars: 5.0,
  });
  await Valorations.create({
    textValoration:
      'La comida es muy buena, pero las porciones pequeñas en comparación',
    stars: 3.0,
  });
  // await Valorations.create({
  //   textValoration: 'Todos muy amables y muy bien de precio',
  //   stars: 4.5,
  // });
  // await Valorations.create({
  //   textValoration: 'Todo mal, el servicio penoso',
  //   stars: 2.0,
  // });
  // await Valorations.create({
  //   textValoration: 'Habitaciones limpias, comida abundante',
  //   stars: 5.0,
  // });
  await mongoose.disconnect();
})();
