import { useEffect, useState } from "react";
import { TNewReminder, TReminder } from "../types";
import {
  deleteReminder,
  getReminders,
  postReminders,
  putReminder,
} from "../api/reminders";

export const useRemindersAPI = () => {
  const [reminders, setReminders] = useState<TReminder[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function get() {
    const response = await getReminders(setIsLoading);

    setReminders(response);
  }

  async function post(reminder: TNewReminder) {
    await postReminders(reminder);
    get();
  }

  async function del(reminder: TReminder) {
    await deleteReminder(reminder.id);
    get();
  }

  async function put(reminder: TReminder) {
    await putReminder(reminder.id, reminder);
    get();
  }

  useEffect(() => {
    get();
  }, []);

  return {
    reminders,
    post,
    put,
    del,
    isLoading,
  };
};
