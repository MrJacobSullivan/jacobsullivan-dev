import * as React from 'react';
// import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

// const CustomStyles = createGlobalStyle({
//   body: {
//     color: theme`colors.green.5`,
//     dark: {
//       color: theme`colors.red.5`
//     }
//   }
// });

const GlobalStyles = () => (
  <>
    <BaseStyles />
    {/* <CustomStyles /> */}
  </>
);

export default GlobalStyles;
