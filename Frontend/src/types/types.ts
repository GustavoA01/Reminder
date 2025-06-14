export type TFormData = {
  description: string;
  date: string;
};

export type TCard = {
  description: string;
  date: Date;
  id: number;
};

export type TReminder = {
  id: number;
  cards: TCard[];
  cardsCounter: number;
  reminderDate: string;
};
