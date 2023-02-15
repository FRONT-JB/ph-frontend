import { ReactNode, useMemo } from 'react';

interface CardProps<T> {
  list?: T[];
  render: (data: T, index: number) => ReactNode;
}

const Card = <T,>({ list = [], render }: CardProps<T>) => {
  const listItem = useMemo(() => list && list.map(render), [list]);
  return <ul>{listItem}</ul>;
};

export default Card;
