import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header/Header';
import { spacing } from '../styles/theme';

type Props = {
  children: any;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: Props) => {
  const title = 'WhiskyPick';
  const desc = [
    'Ratings and details from our whisky tastings in Austin, Texas.',
    'We sample all types -- Bourbon, Irish, Rye, Scotch, and other random whiskies.'
  ].join(' ');
  const src = '/caol-ila-islay-single-malt.a4100c03.jpg';

  return (
    <>
      <Head>
        <title>{pageTitle ? `${title} - ${pageTitle}` : title}</title>
        <meta name="description" content={desc} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="http://whiskypick.com" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={desc} />

        <meta property="og:image" content={src} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="480" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={src} />

        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Header />
        <Box sx={{ margin: `${spacing['40']} auto` }}>
          <Container maxWidth="lg">
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
