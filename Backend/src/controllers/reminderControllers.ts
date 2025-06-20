import { FastifyRequest, FastifyReply } from "fastify";
import { TNewReminder } from "../types";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const postReminder = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
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
};

export const getReminders = async (req: FastifyRequest,reply: FastifyReply) => {
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
};

export const putReminder = async (
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
};

export const deleteReminder = async (
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
};
