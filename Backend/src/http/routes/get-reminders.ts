import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../../lib/prisma";
import { server } from "../server";

export const getReminders = () => {
  server.get("/reminders", async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const reminders = await prisma.reminder.findMany({
        include: {
          cards: true,
        },
        orderBy: {
          reminderDate: "asc",
        },
      });

      return reminders;
    } catch (error) {
      console.log(error);
      return reply.status(500).send({ error: "Erro interno do servidor" });
    }
  });
};
