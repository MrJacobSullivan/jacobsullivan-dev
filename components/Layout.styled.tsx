import styled from 'styled-components'

interface ILayoutContainer {}

const LayoutContainer = styled.div<ILayoutContainer>`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`

const Margins = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
`

interface IMainContainer {}

const MainContainer = styled.main<IMainContainer>`
  flex-grow: 1;
`

export { LayoutContainer, Margins, MainContainer }
