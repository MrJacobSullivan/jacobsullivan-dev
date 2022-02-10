import tw, { styled } from 'twin.macro';

const Container = styled.div(() => [
  tw`flex flex-col items-center justify-center w-screen`,
  tw`dark:text-gray-1 text-gray-9`
]);

const Margins = styled.div(() => [
  tw`flex flex-col items-center w-1/2 min-h-screen`
]);

const Page = styled.main(() => [tw`flex-grow`]);

export { Container, Margins, Page };
