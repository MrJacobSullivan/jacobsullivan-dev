import styled from 'styled-components'

interface IFooterContainer {}

const FooterContainer = styled.footer<IFooterContainer>`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

interface ICopyrightText {}

const CopyrightText = styled.span<ICopyrightText>``

export { FooterContainer, CopyrightText }
