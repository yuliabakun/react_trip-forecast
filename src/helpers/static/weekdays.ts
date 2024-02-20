export const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getWeekday = (fromDate: string) => {
  const date = new Date(fromDate);

  return weekdays[date.getDay()];
};
