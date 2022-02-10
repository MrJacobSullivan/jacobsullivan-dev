import * as React from 'react';
import { SectionContainer, SectionTitle, SectionContent } from './styles';

const Section: React.FC<{ title?: String }> = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;
