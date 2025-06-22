import { FastifyReply, FastifyRequest } from "fastify";
import { TNewReminder } from "../../types";
import { prisma } from "../../../lib/prisma";
import { server } from "../server";

export const putReminder = () => {
  server.put(
    "/reminders/:id",
    async (
      req: FastifyRequest<{ Params: { id: string } }>,
      reply: FastifyReply
    ) => {
      const reminderId = req.params.id;
      const updatedReminder = <TNewReminder>req.body;
      const { cards } = updatedReminder;

      try {
        await prisma.card.deleteMany({
          where: {
            reminderId,
          },
        });

        await prisma.reminder.update({
          where: {
            id: reminderId,
          },
          data: {
            cards: {
              create: cards.map((card) => ({
                id: card.id,
                description: card.description,
                date: card.date,
              })),
            },
            cardsCounter: updatedReminder.cardsCounter,
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
