import * as React from 'react';
import { Container, CopyrightText } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <CopyrightText>
        &copy; {year} Jacob Sullivan. All rights reserved.
      </CopyrightText>
    </Container>
  );
};

export default Footer;
