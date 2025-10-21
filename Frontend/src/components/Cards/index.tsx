import { format } from "date-fns"
import { useReminders } from "../../hooks/useReminders"
import { useRemindersAPI } from "../../hooks/useRemindersAPI"
import { CardSkeleton } from "../Card/skeleton"
import { TCard } from "../../types"
import { Card } from "../Card"
import { ReminderDate, RemindersEmpty } from "./styles"

export const Cards = () => {
  const { removeCard, reminders } = useReminders()
  const { isLoading } = useRemindersAPI()

  return (
    <>
      {[...Array(5).map((_, index) => <CardSkeleton key={index} />)]}

      {reminders.length === 0 && !isLoading ? (
        <>
          <RemindersEmpty>
            <span>Não há lembretes salvos</span>
          </RemindersEmpty>
        </>
      ) : (
        reminders.map((reminder) => {
          const dateFormatted = format(reminder.reminderDate, "dd/MM/yyyy")

          return (
            <div key={reminder.id}>
              <ReminderDate>
                <span>{dateFormatted}</span>
              </ReminderDate>

              {reminder.cards.map((card: TCard) => (
                <Card
                  key={card.id}
                  description={card.description}
                  onRemove={() => removeCard(card.id)}
                />
              ))}
            </div>
          )
        })
      )}
    </>
  )
}
