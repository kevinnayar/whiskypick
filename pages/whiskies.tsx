import type { NextPage, GetStaticProps } from 'next';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getWhiskyList } from '../utils/baseUtils';
import { WhiskyItem } from '../types/baseTypes';

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      whiskies: getWhiskyList(),
    },
  };
};

export default function Whiskies({ whiskies }: { whiskies: WhiskyItem[] }) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={8}>
        {whiskies.map((w) => <Card key={w.id} type="whisky" item={w} />)}
      </Grid>
    </Container>
  );
}

Whiskies.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};
