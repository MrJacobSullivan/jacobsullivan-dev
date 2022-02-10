import tw, { styled, css } from 'twin.macro';
import Link from 'next/link';

const Container = styled.header(() => [
  tw`sticky top-0 z-50 flex w-full h-10 px-5 py-10 mt-2 rounded dark:bg-gray-8 bg-gray-2`
]);

const Title = styled.div(() => [tw`flex items-center w-1/2`]);

const Navigation = styled.nav(() => [tw`flex items-center w-1/2`]);

const TitleLink = styled(Link)(() => [
  tw`text-xl font-light transition duration-150`,
  css`
    * {
      color: ${tw`text-violet-5`};
    }
  `
]);

const PageLink = styled(Link)(() => [tw`ml-4`]);

export { Container, Title, Navigation, TitleLink, PageLink };
