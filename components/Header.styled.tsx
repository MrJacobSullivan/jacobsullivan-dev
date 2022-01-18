import styled from 'styled-components';

interface IHeaderContainer {}

const HeaderContainer = styled.header<IHeaderContainer>`
  padding: 2rem;
`;

interface ITitleContainer {}

const TitleContainer = styled.div<ITitleContainer>``;

interface ITitleText {}

const TitleText = styled.h1<ITitleText>`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

interface ISubtitleText {}

const SubtitleText = styled.h2<ISubtitleText>`
  font-size: 1.8rem;
  font-weight: 200;
`;

export { HeaderContainer, TitleContainer, TitleText, SubtitleText };
