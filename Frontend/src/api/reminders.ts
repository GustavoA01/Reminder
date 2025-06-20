import axios from "axios";
import { TNewReminder, TReminder } from "../types";

const url = "http://localhost:3333/reminders";

export const getReminders = async (
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);
  try {
    const res = await axios.get<TReminder[]>(url);
    return res.data;
  } finally {
    setIsLoading(false);
  }
};

export const postReminders = (reminder: TNewReminder) => {
  const { cards, cardsCounter, reminderDate } = reminder;
  return axios.post(url, {
    cards,
    cardsCounter,
    reminderDate,
  });
};

export const putReminder = (id: string, reminder: TReminder) => {
  return axios.put(`${url}/${id}`, reminder);
};

export const deleteReminder = (id: string) => {
  return axios.delete(`${url}/${id}`);
};
