import {
  deleteReminder,
  getReminders,
  postReminder,
  putReminder,
} from "../../controllers/reminderControllers";
import { server } from "../server";

export const remindersRoutes = () => {
  server.post("/reminders", postReminder);

  server.get("/reminders", getReminders);

  server.put("/reminders/:id", putReminder);

  server.delete("/reminders/:id", deleteReminder);
};
