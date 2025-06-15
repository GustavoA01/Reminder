export type TFormData = {
  description: string;
  date: string;
};

export type TCard = {
  id: string;
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
