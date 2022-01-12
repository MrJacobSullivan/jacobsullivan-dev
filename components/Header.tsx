import type { ReactNode, ReactElement } from 'react'

import styles from './Header.module.scss'

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props): ReactElement => {
  return <header className={styles.container}></header>
}

export default Header
