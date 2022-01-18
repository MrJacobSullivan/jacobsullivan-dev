import tw, { styled } from 'twin.macro';

interface ILayoutContainer {
  dark?: boolean;
}

const LayoutContainer = styled.div<ILayoutContainer>`
  ${tw`bg-green-5`};
  ${({ dark }) => dark && tw`bg-red-5`};
`;

const Margins = styled.div`
  ${tw`bg-blue-5`}
`;

interface IMainContainer {}

const MainContainer = styled.main<IMainContainer>`
  flex-grow: 1;
`;

export { LayoutContainer, Margins, MainContainer };
