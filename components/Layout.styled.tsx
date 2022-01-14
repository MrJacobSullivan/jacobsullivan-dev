import { styled } from 'twin.macro';

interface ILayoutContainer {}

const LayoutContainer = styled.div<ILayoutContainer>``;

const Margins = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
`;

interface IMainContainer {}

const MainContainer = styled.main<IMainContainer>`
  flex-grow: 1;
`;

export { LayoutContainer, Margins, MainContainer };
