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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TCard, TFormData } from "../types/types";
import { useReminders } from "../hooks/useReminders";
import { useSort } from "../hooks/useSort";
import { useDateValidation } from "../hooks/useDateValidation";

export function Home() {
  const { register, handleSubmit } = useForm<TFormData>();
  const [cardId, setCardId] = useState(0);

  const { updateReminders, removeCard, reminders } = useReminders();
  const { orderRemindersByDate } = useSort();
  const { handleDate, handleText, isDateEmpty, isTextEmpty, validateDate } =
    useDateValidation();

  function createCard(data: TFormData) {
    const cardName = data.name;
    const cardDate = data.date;
    let date;

    if (!validateDate(cardDate)) {
      return;
    } else {
      date = new Date(cardDate);
      date = addDays(date, 1);
    }

    setCardId((state) => state + 1);

    const newCard: TCard = {
      name: cardName,
      date: date,
      id: cardId,
    };

    updateReminders(newCard);
  }

  return (
    <HomeContainer>
      <Header>
        <h1>Meus lembretes</h1>
      </Header>

      <Main>
        <form action="" onSubmit={handleSubmit(createCard)}>
          <InputText
            type="text"
            {...register("name", {
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
                  name={card.name}
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
