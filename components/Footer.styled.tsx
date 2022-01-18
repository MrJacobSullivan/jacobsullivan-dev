import tw, { styled } from 'twin.macro';

interface IFooterContainer {}

const FooterContainer = styled.footer<IFooterContainer>(() => [
  tw`bottom-0 flex items-center justify-center h-24 p-4 rounded-t bg-gray-8`
]);

interface ICopyrightText {}

const CopyrightText = styled.span<ICopyrightText>(() => [
  tw`text-sm font-light`
]);

export { FooterContainer, CopyrightText };
