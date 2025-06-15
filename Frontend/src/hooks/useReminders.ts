import { TCard, TNewReminder } from "../types";
import { format } from "date-fns";
import { useAPI } from "./api";

export const useReminders = () => {
  const { post, reminders, put, del } = useAPI();

  function updateReminders(newCard: TCard) {
    const formattedDate = format(newCard.date, "dd/MM/yyyy");

    const existingReminder = reminders.find(
      (reminder) => reminder.reminderDate === formattedDate
    );

    if (existingReminder) {
      existingReminder.cards.push(newCard);
      const length = existingReminder.cards.length;
      existingReminder.cardsCounter = length === 0 ? 1 : length;
      put(existingReminder);
    } else {
      createReminder(newCard, formattedDate);
    }
  }

  function createReminder(newCard: TCard, formattedDate: string) {
    const newReminder: TNewReminder = {
      cards: [newCard],
      cardsCounter: 1,
      reminderDate: formattedDate,
    };

    post(newReminder);
  }

  function removeCard(id: string) {
    let reminderToPUT;

    const updatedReminders = reminders.map((reminder) => {
      if (reminder.cards.some((card) => card.id === id)) {
        const filteredCards = reminder.cards.filter((card) => card.id !== id);
        
        const updatedReminder = {
          ...reminder,
          cards: filteredCards,
          cardsCounter: reminder.cardsCounter - 1,
        };

        reminderToPUT = updatedReminder;
        return updatedReminder;
      }

      return reminder;
    });

    const reminderToDelete = updatedReminders.find(
      (reminder) => reminder.cardsCounter === 0
    );

    if (reminderToDelete) {
      del(reminderToDelete);
    } else if (reminderToPUT) {
      put(reminderToPUT);
    }

  }

  return {
    reminders,
    updateReminders,
    removeCard,
  };
};
