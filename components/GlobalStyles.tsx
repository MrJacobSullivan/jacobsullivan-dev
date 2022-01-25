import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  body: {
    background: theme`colors.gray.9`,
    color: theme`colors.gray.1`
  }
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
