export type TCard = {
  id: string;
  description: string;
  date: Date;
};

export type TNewReminder = {
  cards: TCard[];
  cardsCounter: number;
  reminderDate: Date;
}

export type TReminder = TNewReminder & {
  id:string;
};
