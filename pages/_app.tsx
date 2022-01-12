import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/Layout'

import { GlobalTheme } from '../theme'

import '../sass/global.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
