import { format } from "date-fns"
import { Card } from "../components/Card/index"
import {
  HomeContainer,
  Header,
  Main,
  ReminderDate,
  RemindersEmpty,
} from "./styles"
import { TCard } from "../types"
import { useReminders } from "../hooks/useReminders"
import { CardSkeleton } from "../components/Card/skeleton"
import { useRemindersAPI } from "../hooks/useRemindersAPI"
import { CardForm } from "../components/CardForm"

export function Home() {
  const { removeCard, reminders } = useReminders()
  const { isLoading } = useRemindersAPI()

  return (
    <HomeContainer>
      <Header>
        <h1>Meus lembretes</h1>
      </Header>

      <Main>
        <CardForm />

        <span className="sub-title">Lista de lembretes</span>

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
      </Main>
    </HomeContainer>
  )
}
