import tw, { styled } from 'twin.macro';

interface IHeaderContainer {}

const HeaderContainer = styled.header<IHeaderContainer>(() => [
  tw`flex items-center h-32 pl-8`
]);

interface ITitleContainer {}

const TitleContainer = styled.div<ITitleContainer>(() => []);

interface ITitleText {}

const TitleText = styled.h1<ITitleText>(() => [tw`mb-2 text-3xl`]);

interface ISubtitleText {}

const SubtitleText = styled.h2<ISubtitleText>(() => [
  tw`text-xl font-extralight`
]);

export { HeaderContainer, TitleContainer, TitleText, SubtitleText };
