import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/global.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
