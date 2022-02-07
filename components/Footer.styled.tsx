import tw, { styled } from 'twin.macro';

const Container = styled.footer(() => [
  tw`bottom-0 flex items-center justify-center h-24 p-4`
]);

const CopyrightText = styled.span(() => [tw`text-sm font-light`]);

export { Container, CopyrightText };
