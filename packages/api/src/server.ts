import fastify from 'fastify';
import { mainApp } from './app';
import { PORT } from './config';

const server = fastify({
  disableRequestLogging: true,
});

server.register(mainApp);

server.listen(PORT);
