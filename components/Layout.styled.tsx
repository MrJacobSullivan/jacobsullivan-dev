import tw, { styled } from 'twin.macro';

interface ILayoutContainer {
  dark?: boolean;
}

const LayoutContainer = styled.div<ILayoutContainer>`
  ${tw`bg-green-500`};
  ${({ dark }) => dark && tw`bg-red-500`};
`;

const Margins = styled.div`
  ${tw`bg-blue-400`}
`;

interface IMainContainer {}

const MainContainer = styled.main<IMainContainer>`
  flex-grow: 1;
`;

export { LayoutContainer, Margins, MainContainer };
