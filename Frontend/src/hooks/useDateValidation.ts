import { addDays, compareAsc } from "date-fns";

export const useDateValidation = () => {
  
  function validateDate(date: string) {
    let dateToCompare = new Date(date);
    dateToCompare = addDays(dateToCompare, 1);
    const currentDate = new Date();

    let valid = true;

    if (compareAsc(dateToCompare, currentDate) === -1) {
      valid = false;
    }

    return valid;
  }

  return {
    validateDate
  };
};
