import * as React from 'react';
import ThemeButton from '../ThemeButton';
import NavLink from '../NavLink';
import { Container, Title, Navigation, TitleLink } from './styles';
import { links } from '../../config';

const Header = () => {
  return (
    <Container>
      <Title>
        <TitleLink href="/">
          <a>Jacob Sullivan</a>
        </TitleLink>
      </Title>

      <Navigation>
        <NavLink href="/work">Work</NavLink>
        <NavLink external href="/resume">
          Resume
        </NavLink>
        <NavLink external href={links.githubURL}>
          Github
        </NavLink>
        <ThemeButton />
      </Navigation>
    </Container>
  );
};

export default Header;
