import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import GlobalStyles from '../styles/GlobalStyles';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
