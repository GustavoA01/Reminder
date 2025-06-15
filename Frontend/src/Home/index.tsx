import { addDays } from "date-fns";
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
import { useSort } from "../hooks/useSort";
import { useDateValidation } from "../hooks/useDateValidation";

export function Home() {
  const { register, handleSubmit } = useForm<TFormData>();

  const { updateReminders, removeCard, reminders } = useReminders();
  const { orderRemindersByDate } = useSort();
  const { handleDate, handleText, isDateEmpty, isTextEmpty, validateDate } =
    useDateValidation();

  function createCard(data: TFormData) {
    const cardDescription = data.description;
    const cardDate = data.date;
    let date;

    if (!validateDate(cardDate)) {
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
            {...register("description", {
              onChange: (event) => {
                handleText(event);
              },
            })}
            placeholder="Nome do lembrete"
          />
          <InputText
            type="date"
            {...register("date", {
              onChange: (event) => {
                handleDate(event);
              },
            })}
            placeholder="Data do lembrete"
          />

          <Button disabled={isTextEmpty || isDateEmpty} type="submit">
            Criar
          </Button>
        </form>

        <span className="sub-title">Lista de lembretes</span>

        {reminders.length === 0 ? (
          <RemindersEmpty>
            <span>Não há lembretes salvos</span>
          </RemindersEmpty>
        ) : (
          orderRemindersByDate() &&
          reminders.map((reminder) => (
            <div key={reminder.id}>
              <ReminderDate>
                <span>{reminder.reminderDate}</span>
              </ReminderDate>

              {reminder.cards.map((card:TCard) => (
                <Card
                  key={card.id}
                  description={card.description}
                  onRemove={() => removeCard(card.id)}
                />
              ))}
            </div>
          ))
        )}
      </Main>
    </HomeContainer>
  );
}
