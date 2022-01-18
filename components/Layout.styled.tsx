import tw, { styled } from 'twin.macro';

interface ILayoutContainer {
  dark?: boolean;
}

const LayoutContainer = styled.div<ILayoutContainer>(({ dark }) => [
  tw`flex justify-center w-full h-screen`,
  dark && tw`bg-red-5`
]);

const Margins = styled.div(() => [tw`flex flex-col w-2/3 min-h-screen`]);

interface IMainContainer {}

const PageContainer = styled.main<IMainContainer>(() => [tw`flex-grow`]);

export { LayoutContainer, Margins, PageContainer };
