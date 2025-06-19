import { fastify } from "fastify";
import { DataBaseMemory } from "../db/database-memory";
import cors from "@fastify/cors";
import { TNewReminder } from "../types";
import { useSort } from "../hooks/useSort";
import { Prisma, PrismaClient } from "../generated/prisma";

const server = fastify();

server.register(cors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const { orderRemindersByDate } = useSort();

const database = new DataBaseMemory();

const prisma = new PrismaClient();

server.post("/reminders", async (req, reply) => {
  const { cards, cardsCounter, reminderDate } = <TNewReminder>req.body;
  // database.create({
  //   cards,
  //   cardsCounter,
  //   reminderDate,
  // });

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
});

server.get("/reminders", async (req, reply) => {
  // const reminders = database.list();
  try {
    const reminders = await prisma.reminder.findMany({
      include: {
        cards: true,
      },
    });
    orderRemindersByDate(reminders);
    return reminders;
  } catch (error) {
    console.log(error);
    return reply.status(500).send({ error: "Erro interno do servidor" });
  }
});

server.put<{ Params: { id: string } }>("/reminders/:id", async (req, reply) => {
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
      },
    });
    return reply.status(204).send();
    // database.update(reminderId, updatedReminder);
  } catch (error) {
    console.log(error);
    return reply.status(500).send({ error: "Erro interno do servidor" });
  }
});

server.delete<{ Params: { id: string } }>("/reminders/:id", async (req, reply) => {
  const reminderIdToDelete = req.params.id;
  try {
    await prisma.card.deleteMany({
      where:{
        reminderId:reminderIdToDelete
      }
    })
    await prisma.reminder.delete({
      where: {
        id: reminderIdToDelete,
      }
    })
    return reply.status(204).send()
  } catch (error) {
    console.log(error);
    return reply.status(500).send({ error: "Erro interno do servidor" });
  }
  // database.delete(id);
  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
