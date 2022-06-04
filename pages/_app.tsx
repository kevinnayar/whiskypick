
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '../styles/MuiThemeProvider';
import { theme } from '../styles/theme';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout(page: NextPage): JSX.Element
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page)
  
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider>
      {/* @ts-ignore */}
      {getLayout(<Component {...pageProps} />)}
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

