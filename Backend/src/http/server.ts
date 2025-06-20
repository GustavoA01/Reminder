import { fastify } from "fastify";
import cors from "@fastify/cors";
import { remindersRoutes } from "./routes/reminders";


export const server = fastify();

server.register(cors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.register(remindersRoutes)

server.listen({
  port: 3333,
});
