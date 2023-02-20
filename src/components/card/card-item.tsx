import { ImgHTMLAttributes, ReactNode, useMemo } from 'react';

import { DescriptionStyled, TitleStyled } from '@/styles';
import { LanguageType } from '@/styles/theme';
import { dateToLocaleString } from '@/utils';

import { Dot, Icons } from '../common';

import { CardItemImageStyled } from './card.style';

const CardTitle = ({ title }: { title: ReactNode }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

const CardItemImage = ({ src, alt, title, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <CardItemImageStyled>
      <img src={src} alt={alt} title={alt || title} {...rest} />
    </CardItemImageStyled>
  );
};

const CardDate = ({ type, date }: { type: 'create' | 'update'; date: Date }) => {
  const dateTitle = useMemo(() => {
    if (type === 'create') {
      return '생성 날짜';
    }
    return '마지막 업데이트';
  }, [type]);

  return (
    <DescriptionStyled>
      <Icons.Date />
      {dateTitle} - {dateToLocaleString(date)}
    </DescriptionStyled>
  );
};

const CardIssue = ({ count }: { count: number }) => {
  return (
    <DescriptionStyled>
      <Icons.Issue />
      {count}
    </DescriptionStyled>
  );
};

const CardStar = ({ count }: { count: number }) => {
  return (
    <DescriptionStyled>
      <Icons.Star />
      {count}
    </DescriptionStyled>
  );
};

const CardLanguage = ({ language }: { language: LanguageType }) => {
  return (
    <DescriptionStyled>
      <Icons.Language />
      <span>
        <Dot language={language} />
        {language}
      </span>
    </DescriptionStyled>
  );
};

const CardDescription = ({ description }: { description: ReactNode }) => {
  return (
    <DescriptionStyled>
      <Icons.Description />
      {description}
    </DescriptionStyled>
  );
};

const CardFork = ({ count }: { count: number }) => {
  return (
    <DescriptionStyled>
      <Icons.Fork />
      {count}
    </DescriptionStyled>
  );
};

export {
  CardDate,
  CardDescription,
  CardFork,
  CardIssue,
  CardItemImage,
  CardLanguage,
  CardStar,
  CardTitle,
};
