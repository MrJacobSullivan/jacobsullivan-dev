import type { ReactNode, ReactElement } from 'react';

import {
  SectionContainer,
  SectionTitleContainer,
  SectionContentContainer
} from './Section.styled';
import { HeaderText } from './Content.styled';

type Props = {
  title?: String;
  children?: ReactNode;
};

const Section = ({ title, children }: Props): ReactElement => {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <HeaderText>{title}</HeaderText>
      </SectionTitleContainer>

      <SectionContentContainer>{children}</SectionContentContainer>
    </SectionContainer>
  );
};

export default Section;
