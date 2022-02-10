import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
