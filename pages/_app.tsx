import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/global.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme="dark">
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>Jacob Sullivan | Web Developer</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default App;
