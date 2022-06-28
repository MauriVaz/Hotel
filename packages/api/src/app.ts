import { FastifyPluginAsync } from 'fastify';

import { conectDB } from './lib/db';
import { mainRouter } from './routers/main_router';
import { valorationsRouter } from './routers/valorations_router';

export const mainApp: FastifyPluginAsync = async (app) => {
  conectDB();
  app.register(valorationsRouter, { prefix: '/valorations' });
  app.register(mainRouter);
};
