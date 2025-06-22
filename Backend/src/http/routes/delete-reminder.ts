import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../../lib/prisma";
import { server } from "../server";

export const deleteReminder = () => {
  server.delete(
    "/reminders/:id",
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      reply: FastifyReply
    ) => {
      const reminderId = req.params.id;

      try {
        await prisma.reminder.delete({
          where: {
            id: reminderId,
          },
        });

        return reply.status(204).send();
      } catch (error) {
        console.log(error);
        return reply.status(500).send({ error: "Erro interno do servidor" });
      }
    }
  );
};
