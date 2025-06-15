export type TCard = {
  id: number;
  description: string;
  date: Date;
};

export type TNewReminder = {
  cards: TCard[];
  cardsCounter: number;
  reminderDate: string;
}

export type TReminder = TNewReminder & {
  id:string;
};
