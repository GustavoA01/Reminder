import { addDays, format } from "date-fns";
import { Card } from "../components/Card/index";
import {
  HomeContainer,
  Header,
  Main,
  InputText,
  Button,
  ReminderDate,
  RemindersEmpty,
} from "./styles";
import { useForm } from "react-hook-form";
import { TCard, TFormData } from "../types";
import { useReminders } from "../hooks/useReminders";
import { useDateValidation } from "../hooks/useDateValidation";
import { CardSkeleton } from "../components/Card/skeleton";
import { useRemindersAPI } from "../hooks/useRemindersAPI";

export function Home() {
  const { register, handleSubmit } = useForm<TFormData>();

  const { updateReminders, removeCard, reminders } = useReminders();
  const { validateDate } = useDateValidation();
  const { isLoading } = useRemindersAPI();

  function createCard(data: TFormData) {
    const cardDescription = data.description;
    const cardDate = data.date;
    let date;

    if (!validateDate(cardDate)) {
      alert("Digite uma data atual ou no futuro");
      return;
    } else {
      date = new Date(cardDate);
      date = addDays(date, 1);
    }

    const newCard: TCard = {
      id: crypto.randomUUID(),
      description: cardDescription,
      date: date,
    };

    updateReminders(newCard);
  }

  return (
    <HomeContainer>
      <Header>
        <h1>Meus lembretes</h1>
      </Header>

      <Main>
        <form onSubmit={handleSubmit(createCard)}>
          <InputText
            type="text"
            {...register("description")}
            required
            placeholder="Nome do lembrete"
          />
          <InputText
            type="date"
            {...register("date")}
            required
            placeholder="Data do lembrete"
          />

          <Button type="submit">Criar</Button>
        </form>

        <span className="sub-title">Lista de lembretes</span>

        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />

        {reminders.length === 0 && !isLoading ? (
          <>
            <RemindersEmpty>
              <span>Não há lembretes salvos</span>
            </RemindersEmpty>
          </>
        ) : (
          reminders.map((reminder) => {
            const dateFormatted = format(reminder.reminderDate, "dd/MM/yyyy");
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
            );
          })
        )}
      </Main>
    </HomeContainer>
  );
}
