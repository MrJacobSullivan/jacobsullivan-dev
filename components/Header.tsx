import type { ReactElement } from 'react'

import { HeaderContainer, TitleContainer, TitleText, SubtitleText } from './Header.styled'

const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleText>Jacob Sullivan</TitleText>
        <SubtitleText>Software Engineer</SubtitleText>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header
