const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const;

const dateToLocaleString = (date: Date) => {
  return new Date(date).toLocaleDateString('ko-KR', dateOptions);
};

export { dateToLocaleString };
