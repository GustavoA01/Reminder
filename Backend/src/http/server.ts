import { fastify } from "fastify";
import { DataBaseMemory } from "../db/database-memory";
import cors from "@fastify/cors";
import { TNewReminder } from "../types";
import { useSort } from "../hooks/useSort";
// import { PrismaClient, Prisma } from '@prisma/client'

const server = fastify();

server.register(cors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const { orderRemindersByDate } = useSort();

const database = new DataBaseMemory();

// const db = new PrismaClient()

server.post("/reminders", (req, reply) => {
  const { cards, cardsCounter, reminderDate } = <TNewReminder>req.body;

  // db.reminder.create({
  //   cards,
  //   cardsCounter,
  //   reminderDate,
  // })

  database.create({
    cards,
    cardsCounter,
    reminderDate,
  });

  return reply.status(201).send();
});

server.get("/reminders", () => {
  const reminders = database.list();
  orderRemindersByDate(reminders);
  return reminders;
});

server.put<{ Params: { id: string } }>("/reminders/:id", (req, reply) => {
  const reminderId = req.params.id;
  const updatedReminder = <TNewReminder>req.body;

  database.update(reminderId, updatedReminder);
  return reply.status(204).send();
});

server.delete<{ Params: { id: string } }>("/reminders/:id", (req, reply) => {
  const id = req.params.id;

  database.delete(id);
  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
