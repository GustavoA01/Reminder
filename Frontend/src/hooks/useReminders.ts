import { TCard, TNewReminder } from "../types";
import { format } from "date-fns";
import { useRemindersAPI } from "./useRemindersAPI";

export const useReminders = () => {
  const { post, reminders, put, del } = useRemindersAPI();

  function updateReminders(newCard: TCard) {
    const formattedDate = format(newCard.date, "dd/MM/yyyy");

    const existingReminder = reminders.find(
      (reminder) => format(reminder.reminderDate,"dd/MM/yyyy") === formattedDate
    );

    if (existingReminder) {
      existingReminder.cards.push(newCard);

      const length = existingReminder.cards.length;
      existingReminder.cardsCounter = length === 0 ? 1 : length;

      put(existingReminder);
    } else {
      createReminder(newCard);
    }
  }

  function createReminder(newCard: TCard) {
    const newReminder: TNewReminder = {
      cards: [newCard],
      cardsCounter: 1,
      reminderDate: newCard.date,
    };

    post(newReminder);
  }

  function removeCard(id: string) {
    let reminderToPut;

    const updatedReminders = reminders.map((reminder) => {
      if (reminder.cards.some((card) => card.id === id)) {
        const filteredCards = reminder.cards.filter((card) => card.id !== id);
        
        const updatedReminder = {
          ...reminder,
          cards: filteredCards,
          cardsCounter: reminder.cardsCounter - 1,
        };

        reminderToPut = updatedReminder;
        return updatedReminder;
      }

      return reminder;
    });

    const reminderToDelete = updatedReminders.find(
      (reminder) => reminder.cardsCounter === 0
    );

    if (reminderToDelete) {
      del(reminderToDelete);
    } else if (reminderToPut) {
      put(reminderToPut);
    }

  }

  return {
    reminders,
    updateReminders,
    removeCard,
  };
};
