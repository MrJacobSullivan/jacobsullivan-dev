import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  body: {
    background: theme`colors.blue.500`
  }
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
