import { FastifyReply, FastifyRequest } from "fastify";
import { TNewReminder } from "../../types";
import { prisma } from "../../../lib/prisma";
import { server } from "../server";

export const postReminder = () => {
  server.post(
    "/reminders", async (req: FastifyRequest, reply: FastifyReply) => {
      const { cards, cardsCounter, reminderDate } = <TNewReminder>req.body;

      try {
        await prisma.reminder.create({
          data: {
            cards: {
              create: cards.map((card) => ({
                id: card.id,
                description: card.description,
                date: card.date,
              })),
            },
            cardsCounter,
            reminderDate: new Date(reminderDate),
          },
        });

        return reply.status(201).send();
      } catch (error) {
        console.log(error);
        return reply.status(500).send({ error: "Erro interno do servidor" });
      }
    }
  );
};
