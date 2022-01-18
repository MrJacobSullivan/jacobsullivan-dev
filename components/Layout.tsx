import type { ReactNode } from 'react';

import { LayoutContainer, Margins, PageContainer } from './Layout.styled';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Margins>
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </Margins>
    </LayoutContainer>
  );
};

export default Layout;
