const FilterConstants = {
  InitialPage: 1,
  InitialLimit: 10,
  LimitOfTwenty: 20,
  LimitOfFifty: 50,
} as const;

const FilterLimitButtons = [
  { id: 1, text: '10개씩 보기', value: 10 },
  {
    id: 2,
    text: '20개씩 보기',
    value: 20,
  },
  {
    id: 3,
    text: '50개씩 보기',
    value: 50,
  },
];

export { FilterConstants, FilterLimitButtons };
