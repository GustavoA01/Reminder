export type TFormData = {
  name: string;
  date: string;
};

export type TCard = {
  name: string;
  date: Date;
  id: number;
};

export type TReminder = {
  reminderDate: string;
  cards: TCard[];
  cardsCounter: number;
  id: number;
};
