import * as React from 'react';
import { Container, Margins, Page } from './styles';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Margins>
        <Header />
        <Page>{children}</Page>
        <Footer />
      </Margins>
    </Container>
  );
};

export default Layout;
