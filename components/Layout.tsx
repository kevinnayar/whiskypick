import Head from 'next/head';
import Header from './Header';
import Box from '@mui/material/Box';

type Props = {
  children: any;
  pageTitle?: string;
};

export default function Layout({ children, pageTitle }: Props) {
  const title = 'WhiskyPick';
  const description =
    'Ratings and details from our whisky tastings in Austin, Texas. We sample all types: Bourbon, Irish, Rye, Scotch, and random other whiskys.';
  const imgSrc = '/caol-ila-islay-single-malt.a4100c03.jpg';

  return (
    <>
      <Head>
        <title>{pageTitle ? `${title} - ${pageTitle}` : title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="http://whiskypick.com" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content={imgSrc} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="480" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgSrc} />

        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Header />
        <Box sx={{ marginTop: '10rem' }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
