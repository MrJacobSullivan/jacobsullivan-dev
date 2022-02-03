import type { ReactNode, ReactElement } from 'react';

import {
  SectionContainer,
  SectionTitle,
  SectionContent
} from './Section.styled';

type Props = {
  title?: String;
  children?: ReactNode;
};

const Section = ({ title, children }: Props): ReactElement => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;
