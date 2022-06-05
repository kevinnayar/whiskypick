import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react'
import { useTheme } from 'styled-components';

const fonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
];


export function MuiThemeProvider({ children }: { children: ReactNode }) {
  const appTheme = useTheme();
  // @ts-ignore
  const { fontSize, spacing, colors } = appTheme;

  const muiTheme = useMemo<Theme>(() => createTheme({
    typography: {
      fontFamily: fonts.join(', '),
      h1: {
        fontWeight: 'bold',
        fontSize: fontSize['2xl'],
      },
      h2: {
        fontWeight: 'bold',
        fontSize: fontSize['3xl'],
        marginBottom: spacing['6'],
      },
      h3: {
        fontWeight: 'bold',
        fontSize: fontSize['xl'],
        marginTop: spacing['3'],
        marginBottom: spacing['1'],
      },
      h4: {
        fontSize: fontSize['md'],
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
            color: colors.black,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: `2px solid ${colors.grey}`,
            borderRadius: spacing['2.5'],
            textAlign: 'center',

            '&:hover': {
              boxShadow: '0 0 10px rgba(100, 100, 100, 0.3)',
              border: `2px solid ${colors.primary}`,
            }
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0 0 10px rgba(100, 100, 100, 0.3)',
            background: colors.white,
          },
        },
      }
    },
    palette: {
      primary: {
        main: colors.primary,
      },
    },
  }), [appTheme])

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  )
}
