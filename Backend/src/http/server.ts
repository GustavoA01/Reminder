import { fastify } from "fastify";
import cors from "@fastify/cors";
import { postReminder } from "./routes/post-reminder";
import { deleteReminder } from "./routes/delete-reminder";
import { putReminder } from "./routes/put-reminder";
import { getReminders } from "./routes/get-reminders";


export const server = fastify();

server.register(cors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(postReminder)
server.register(getReminders)
server.register(putReminder)
server.register(deleteReminder)

server.listen({
  port: 3333,
});
