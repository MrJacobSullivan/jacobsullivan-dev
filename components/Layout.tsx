import type { ReactNode, ReactElement } from 'react'

import styles from './Layout.module.scss'

import { LayoutContainer } from './Layout.styled'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props): ReactElement => {
  return <LayoutContainer className={styles.container}>{children}</LayoutContainer>
}

export default Layout
