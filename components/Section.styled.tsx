import tw, { styled } from 'twin.macro';

interface ISectionContainer {}

const SectionContainer = styled.div<ISectionContainer>(() => [tw`flex`]);

interface ISectionTitleContainer {}

const SectionTitleContainer = styled.h2<ISectionTitleContainer>(() => []);

interface ISectionContentContainer {}

const SectionContentContainer = styled.div<ISectionContentContainer>(() => []);

export { SectionContainer, SectionTitleContainer, SectionContentContainer };
