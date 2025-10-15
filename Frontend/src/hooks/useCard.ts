import { addDays } from "date-fns"
import { TCard, TFormData } from "../types"
import { useDateValidation } from "./useDateValidation"
import { useReminders } from "./useReminders"

export const useCard = () => {
  const { validateDate } = useDateValidation()
  const { updateReminders } = useReminders()

  function createCard(data: TFormData) {
    const cardDescription = data.description
    const cardDate = data.date
    let date

    if (!validateDate(cardDate)) {
      alert("Digite uma data atual ou no futuro")
      return
    } else {
      date = new Date(cardDate)
      date = addDays(date, 1)
    }

    const newCard: TCard = {
      id: crypto.randomUUID(),
      description: cardDescription,
      date: date,
    }

    updateReminders(newCard)
  }

  return {
    createCard,
  }
}
