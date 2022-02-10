import tw, { styled } from 'twin.macro';

export const Container = styled.div(() => [
  tw`flex flex-col items-center justify-center w-screen`,
  tw`dark:text-gray-1 text-gray-9`
]);

export const Margins = styled.div(() => [
  tw`flex flex-col items-center w-1/2 min-h-screen`
]);

export const Page = styled.main(() => [tw`flex-grow`]);
