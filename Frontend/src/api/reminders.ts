import { TNewReminder, TReminder } from "../types";
import { api } from "../lib/axios";

const remindersEndPoint = "/reminders";

export const getReminders = async (
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);
  try {
    const res = await api.get<TReminder[]>(remindersEndPoint);
    return res.data;
  } finally {
    setIsLoading(false);
  }
};

export const postReminders = (reminder: TNewReminder) => {
  const { cards, cardsCounter, reminderDate } = reminder;
  return api.post(remindersEndPoint, {
    cards,
    cardsCounter,
    reminderDate,
  });
};

export const putReminder = (id: string, reminder: TReminder) => {
  return api.put(`${remindersEndPoint}/${id}`, reminder);
};

export const deleteReminder = (id: string) => {
  return api.delete(`${remindersEndPoint}/${id}`);
};
