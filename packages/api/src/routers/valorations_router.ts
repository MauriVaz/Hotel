import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Valorations } from '../models/valorations.model';

type Myrequest = FastifyRequest<{
  Body: { textValoration: string; stars: number };
  Params: { id: string };
}>;

export const valorationsRouter: FastifyPluginAsync = async (app) => {
  app.get('/', async (req, reply) => {
    const valorations = await Valorations.find().lean();
    return valorations;
  });

  app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const valorations = await Valorations.findById(id);
    return valorations;
  });

  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { textValoration, stars } = request.body;
    const valorations = new Valorations({ textValoration, stars });
    await valorations.save();
    return valorations;
  });

  app.post('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const valorations = await Valorations.findOneAndUpdate(
      { _id: id },
      request.body,
      {
        new: true,
      }
    );
    return valorations;
  });

  app.delete('/', async (request: Myrequest, reply: FastifyReply) => {
    await Valorations.deleteMany();
    return { status: 'All many in database has been deleted' };
  });

  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const valorations = await Valorations.findByIdAndDelete(id);
    return valorations;
  });
};
