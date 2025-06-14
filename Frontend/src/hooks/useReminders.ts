import { useState } from "react";
import { TCard, TReminder } from "../types/types";
import { format } from "date-fns";

export const useReminders = () => {
  const [reminders, setReminders] = useState<TReminder[]>([])
  const [reminderId, setReminderId] = useState(0)

  function updateReminders(newCard: TCard) {
    const formattedDate = format(newCard.date, "dd/MM/yyyy")
    const existingReminder = reminders.find(
      (reminder) => reminder.reminderDate === formattedDate
    )

    if (existingReminder) {
      existingReminder.cards.push(newCard)
      existingReminder.cardsCounter += 1
    } else {
      createReminder(newCard, formattedDate)
    }
  }

  // const fetchData = async () =>{
  //   const response = await fetch("http://localhost:3333/reminders")
  //   console.log(response.body)
  // }

  function createReminder(newCard: TCard, formattedDate: string) {
    setReminderId((state) => state + 1)

    // fetchData()

    const newReminder: TReminder = {
      id: reminderId,
      cards: [newCard],
      cardsCounter: 1,
      reminderDate: formattedDate,
    };

    setReminders((state) => [...state, newReminder])
  }

  function removeCard(id: number) {
    const updatedReminders = reminders.map((reminder) => {
      if (reminder.cards.some((card) => card.id === id)) {
        const filteredCards = reminder.cards.filter((card) => card.id !== id)
        reminder.cardsCounter -= 1

        return { ...reminder, cards: filteredCards }
      }
      return reminder
    });

    const filteredReminders = updatedReminders.filter(
      (reminder) => reminder.cardsCounter !== 0
    )

    setReminders(filteredReminders)
  }

  return {
    reminders,
    reminderId,
    updateReminders,
    removeCard,
  };
};
