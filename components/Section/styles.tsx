import tw, { styled } from 'twin.macro';
import { HeaderText } from '../GeneralContent/styles';

export const SectionContainer = styled.div(() => [tw`flex flex-col`]);

export const SectionTitle = styled(HeaderText)(() => [tw`font-light text-2xl`]);

export const SectionContent = styled.div(() => [tw``]);
