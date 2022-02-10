import * as React from 'react';
import ThemeButton from '../ThemeButton';
import { Container, Title, Navigation, TitleLink, PageLink } from './styles';
import { config } from '../../config';

const Header = () => {
  return (
    <Container>
      <Title>
        <TitleLink href="/">
          <a>Jacob Sullivan</a>
        </TitleLink>
      </Title>

      <Navigation>
        <PageLink href="/work">
          <a>Work</a>
        </PageLink>

        <PageLink href="/resume">
          <a target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </PageLink>

        <PageLink href={config.github}>
          <a target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </PageLink>

        <ThemeButton />
      </Navigation>
    </Container>
  );
};

export default Header;
