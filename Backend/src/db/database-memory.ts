import { randomUUID } from "node:crypto"
import { TNewReminder, TReminder } from "../types"



export class DataBaseMemory{
  #reminders = new Map()

  list(){
    return Array.from(this.#reminders.entries()).map((remindersarray)=>{
      const id = remindersarray[0]
      const data = remindersarray[1]

      return {
        id,
        ...data
      }
    })
  }

  create(reminder:TNewReminder){
    const reminderId = randomUUID()
    this.#reminders.set(reminderId,reminder)
  }

  update(id:string,reminder:TNewReminder){
    this.#reminders.set(id,reminder)
  }

  delete(id:string){
    this.#reminders.delete(id)
  }
}