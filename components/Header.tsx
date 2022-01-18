import {
  HeaderContainer,
  TitleContainer,
  TitleText,
  SubtitleText
} from './Header.styled';

import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleText>Jacob Sullivan</TitleText>
        <SubtitleText>Software Engineer</SubtitleText>
        <Navigation />
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
