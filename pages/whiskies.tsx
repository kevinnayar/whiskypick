import type { NextPage, GetStaticProps } from 'next';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import Card from '../components/Card/Card';
import Filters from '../components/Filters';
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
    <Grid container spacing={8}>
      <Filters />
      {whiskies.map((w) => (
        <Grid key={w.id} item lg={3} md={4} sm={6} xs={12}>
          <Card type="whisky" item={w} />
        </Grid>
      ))}
    </Grid>
  );
}

Whiskies.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};
