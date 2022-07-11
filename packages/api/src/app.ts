import { FastifyPluginAsync } from 'fastify';
// import fastifyCors from 'fastify-cors';
import { conectDB } from './lib/db';
import { mainRouter } from './routers/main_router';
import { valorationsRouter } from './routers/valorations_router';

export const mainApp: FastifyPluginAsync = async (app) => {
  conectDB();
  // app.register(fastifyCors, {
  //   origin: (origin: any, cb: any) => {
  //     if (/localhost/.test(origin)) {
  //       //  Request from localhost will pass
  //       cb(null, true);
  //       return;
  //     }
  //     // Generate an error on other origins, disabling access
  //     cb(null, false);
  //   },
  // });
  app.register(valorationsRouter, { prefix: '/valorations' });
  app.register(mainRouter);
};
