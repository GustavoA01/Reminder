import { randomUUID } from "node:crypto"

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

  create(reminder){
    const reminderId = randomUUID()
    this.#reminders.set(reminderId,reminder)
  }

  update(id,reminder){
    this.#reminders.set(id,reminder)
  }

  delete(id){
    this.#reminders.delete(id)
  }
}