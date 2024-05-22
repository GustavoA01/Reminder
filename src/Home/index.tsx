import { addDays, compareAsc, format } from "date-fns";
import { Card } from "./components/Card/index";
import { HomeContainer, Header, Main, InputText, Button, ReminderDate, RemindersEmpty } from "./styles";
import { useState } from "react";
import moment from "moment";


export function Home() {

    const [reminders, setReminders] = useState([])
    const [cardId, setCardId] = useState(0)
    const [reminderId, setReminderId] = useState(0)
    const [isTextEmpty, setIsTextEmpty] = useState(true)
    const [isDateEmpty, setIsDateEmpty] = useState(true)

    function handleText() {
        const empty = !event?.target.value
        setIsTextEmpty(empty)
    }

    function handleDate() {
        const empty = !event?.target.value
        setIsDateEmpty(empty)
    }

    function validateDate(date: string) {
        let dateToCompare = new Date(date)
        dateToCompare = addDays(dateToCompare, 1)
        const currentDate = new Date()

        let valid = true

        if ((compareAsc(dateToCompare, currentDate) === -1)) {
            alert('Digite uma data no futuro')
            valid = false
        }

        return valid
    }

    function createCard() {
        const cardName = document.getElementById('name').value
        const cardDate = document.getElementById('date').value
        let date

        if (!validateDate(cardDate)) {
            return
        } else {
            date = new Date(cardDate)
            date = addDays(date, 1)
        }

        setCardId(state => state + 1)

        const newCard = {
            name: cardName,
            date: date,
            id: cardId
        }

        updateReminders(newCard)
    }

    function updateReminders(newCard: object) {
        const formattedDate = format(newCard.date, "dd/MM/yyyy")
        const existingReminder = reminders.find(reminder => reminder.reminderDate === formattedDate)

        if (existingReminder) {
            existingReminder.cards.push(newCard)
            existingReminder.cardsCounter += 1
        } else {
            createReminder(newCard, formattedDate)
        }

    }

    function createReminder(newCard: object, formattedDate: string) {
        setReminderId(state => state + 1)

        const newReminder = {
            reminderDate: formattedDate,
            cards: [newCard],
            cardsCounter: 1,
            id: reminderId
        }

        setReminders(state => [...state, newReminder])

    }

    function removeCard(id: number) {

        const updatedReminders = reminders.map(reminder => {

            if (reminder.cards.some(card => card.id === id)) {

                const filteredCards = reminder.cards.filter(card => card.id !== id)
                reminder.cardsCounter -= 1

                return { ...reminder, cards: filteredCards }
            }

            return reminder
        })

        const filteredReminders = updatedReminders.filter(reminder => reminder.cardsCounter !== 0)

        setReminders(filteredReminders)
    }

    function orderRemindersByDate() {
        for (let i = 0; i < reminders.length - 1; i++) {
            for (let j = reminders.length - 1; j > i; j--) {
                
                if (compareData(reminders[j - 1].reminderDate,reminders[j].reminderDate)) {
                    const temp = reminders[j]
                    reminders[j] = reminders[j - 1]
                    reminders[j - 1] = temp
                }
            }
        }

        return true
    }
    
    function compareData(date1:string,date2:string){
        const diff = moment(date2,"DD/MM/YYYY").diff(moment(date1,"DD/MM/YYYY"))

        let isSmaller

        if(diff<=1){
            isSmaller = true
        }else{
            isSmaller = false
        }

        return isSmaller
    }

    return (
        <HomeContainer>
            <Header>
                <h1>Meus lembretes</h1>
            </Header>

            <Main>

                <InputText type="text" id='name' onChange={handleText} placeholder="Nome do lembrete" />
                <InputText type="date" id='date' onChange={handleDate} placeholder="Data do lembrete" />

                <Button onClick={createCard} disabled={isTextEmpty || isDateEmpty} type='submit'>
                    Criar
                </Button>

                <span className="sub-title">Lista de lembretes</span>

                {(reminders.length === 0) ? (

                    <RemindersEmpty>
                        <span>Não há lembretes salvos</span>
                    </RemindersEmpty>

                ) : (orderRemindersByDate()) && (

                    reminders.map(reminder => (

                        <div key={reminder.id}>

                            <ReminderDate>
                                <span>{reminder.reminderDate}</span>
                            </ReminderDate>

                            {reminder.cards.map(card => (

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
    )
}