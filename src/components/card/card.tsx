import { ReactNode, useMemo } from 'react';

import {
  CardDate,
  CardDescription,
  CardIssue,
  CardLanguage,
  CardStar,
  CardTitle,
} from './card-item';

interface CardProps<T> {
  list?: T[];
  render: (data: T, index: number) => ReactNode;
}

const Card = <T,>({ list = [], render }: CardProps<T>) => {
  const listItem = useMemo(() => list && list.map(render), [list]);
  return <ul>{listItem}</ul>;
};

Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Issue = CardIssue;
Card.Language = CardLanguage;
Card.Star = CardStar;
Card.Date = CardDate;

export default Card;
