import * as React from 'react';
import { Container, Margins, Page } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
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
