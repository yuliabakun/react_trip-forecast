export const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  let month: number | string = today.getMonth() + 1;
  let day: number | string = today.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

export const getMaxDate = () => {
  const today = new Date();

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 15);

  const year = maxDate.getFullYear();
  let month: number | string = maxDate.getMonth() + 1;
  let day: number | string = maxDate.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

export const getTripDates = (startAt: string, endAt: string) => {
  let start = startAt;
  let end = endAt;

  start = start.split('-').reverse().join('.');
  end = end.split('-').reverse().join('.');

  return `${start} - ${end}`;
};
