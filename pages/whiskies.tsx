import type { NextPage, GetStaticProps } from 'next';
import Grid from '@mui/material/Grid';
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
    <Grid container spacing={8}>
      {whiskies.map((w) => <Card key={w.id} type="whisky" item={w} />)}
    </Grid>
  );
}

Whiskies.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};
