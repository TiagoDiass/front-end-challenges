import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
