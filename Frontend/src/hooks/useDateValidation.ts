import { addDays, compareAsc } from "date-fns";
import { useState } from "react";

export const useDateValidation = () => {
  const [isTextEmpty, setIsTextEmpty] = useState(true);
  const [isDateEmpty, setIsDateEmpty] = useState(true);

  function handleText(event: React.ChangeEvent<HTMLInputElement>) {
    const empty = !event?.target.value;
    setIsTextEmpty(empty);
  }

  function handleDate(event: React.ChangeEvent<HTMLInputElement>) {
    const empty = !event?.target.value;
    setIsDateEmpty(empty);
  }
  
  function validateDate(date: string) {
    let dateToCompare = new Date(date);
    dateToCompare = addDays(dateToCompare, 1);
    const currentDate = new Date();

    let valid = true;

    if (compareAsc(dateToCompare, currentDate) === -1) {
      alert("Digite uma data no futuro");
      valid = false;
    }

    return valid;
  }

  return {
    validateDate,
    handleDate,
    handleText,
    isDateEmpty,
    isTextEmpty
  };
};
