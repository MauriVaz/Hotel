import { conectDB } from '../lib/db';
import { Valorations } from '../models/valorations.model';

(async () => {
  const { close } = await conectDB();
  try {
    await Valorations.collection.drop();
  } catch (error) {
    console.log('There are nothing to drop from db');
  }

  const val1 = await Valorations.create({
    textValoration: 'Experiencia muy agradable en el hotel',
    stars: 4.5,
  });
  const val2 = await Valorations.create({
    textValoration: 'El servicio prestado fue muy agradable',
    stars: 5.0,
  });

  await close();
})();
