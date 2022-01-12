import styled from 'styled-components'

interface ILayoutContainer {
  dark?: boolean
}

const LayoutContainer = styled.div<ILayoutContainer>`
  background: ${({ dark }) => (dark ? 'red' : 'yellow')};
`

interface ITitleText {
  dark?: boolean
}

export { LayoutContainer }
