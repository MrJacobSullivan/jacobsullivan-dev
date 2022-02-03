import tw, { styled } from 'twin.macro';
import { HeaderText } from './Content.styled';

const SectionContainer = styled.div(() => [tw`flex flex-col`]);

const SectionTitle = styled(HeaderText)(() => [tw`font-light text-2xl`]);

const SectionContent = styled.div(() => [tw``]);

export { SectionContainer, SectionTitle, SectionContent };
