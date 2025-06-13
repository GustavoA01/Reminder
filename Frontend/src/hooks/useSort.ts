import moment from "moment";
import { useReminders } from "./useReminders";

function compareDate(date1: string, date2: string) {
  const diff = moment(date2, "DD/MM/YYYY").diff(moment(date1, "DD/MM/YYYY"));

  let isSmaller;

  if (diff <= 1) {
    isSmaller = true;
  } else {
    isSmaller = false;
  }
  return isSmaller;
}

export const useSort = () => {
  const { reminders } = useReminders();

  function orderRemindersByDate() {
    for (let i = 0; i < reminders.length - 1; i++) {
      for (let j = reminders.length - 1; j > i; j--) {
        if (
          compareDate(reminders[j - 1].reminderDate, reminders[j].reminderDate)
        ) {
          const temp = reminders[j];
          reminders[j] = reminders[j - 1];
          reminders[j - 1] = temp;
        }
      }
    }
    return true;
  }
  return {
    orderRemindersByDate,
  };
};
