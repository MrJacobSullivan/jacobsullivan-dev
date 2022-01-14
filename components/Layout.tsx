import type { ReactNode, ReactElement } from 'react';

import { LayoutContainer, Margins, MainContainer } from './Layout.styled';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props): ReactElement => {
  return (
    <LayoutContainer>
      <Margins>
        <Header />

        <MainContainer>{children}</MainContainer>

        <Footer />
      </Margins>
    </LayoutContainer>
  );
};

export default Layout;
