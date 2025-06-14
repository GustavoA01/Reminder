import { fastify } from "fastify";
import { DataBaseMemory } from "../db/database-memory";

const server = fastify();

const database = new DataBaseMemory();

server.post("/reminders", (req, reply) => {
  const { cards, cardsCounter, reminderDate } = req.body;

  database.create({
    cards,
    cardsCounter,
    reminderDate,
  });

  console.log(database.list());

  return reply.status(201).send();
});

server.get("/reminders", (req, reply) => {
  const reminders = database.list();
  return reminders;
});

// server.put("/reminders/:id", (req, reply) => {
//   const reminderId = req.params.id;
//   const { name, description } = req.body;

//   database.update(reminderId, {
//     name,
//     description,
//   });
//   return reply.status(204).send();
// });

server.delete("/reminders/:id", (req, reply) => {
  const id = req.params.id;

  database.delete(id);
  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
