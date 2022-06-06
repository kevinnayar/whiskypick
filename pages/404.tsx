import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { spacing } from '../styles/theme';

export default function FourOhFour() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2">
        404
      </Typography>
      <Box sx={{ marginBottom: spacing['10'] }}>
        <Typography variant="h4">
          This page could not be found
        </Typography>
      </Box>
      <Box>
        <Button variant="outlined" color="primary" href="/">Go back home</Button>
      </Box>
    </Box>
  );
}

FourOhFour.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="home">{page}</Layout>;
};
