import { useEffect, useState } from "react";
import { TNewReminder, TReminder } from "../types";
import { deleteReminder, getReminders, postReminders, putReminder } from "../lib/useAPI";
import { useSort } from "./useSort";

export const useAPI = () => {
  const [reminders, setReminders] = useState<TReminder[]>([]);
  // const {} = useSort()

  useEffect(() => {
    get();
  }, []);
  
  async function get() {
    const response = await getReminders();
    setReminders(response);
    // orderRemindersByDate()
  }

  async function post(reminder: TNewReminder) {
    await postReminders(reminder);
    get()
  }

  async function del(reminder: TReminder) {
    await deleteReminder(reminder.id);
    get();
  }

  async function put(reminder: TReminder){
    await putReminder(reminder.id,reminder)
    get()
  }

  return {
    reminders,
    post,
    put,
    del,
  };
};
