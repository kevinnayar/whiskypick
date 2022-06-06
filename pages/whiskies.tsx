import { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import Filters from '../components/Filters/Filters';
import { TypeUrlQuery } from '../components/Filters/FilterOptions';
import {
  getWhiskyList,
  getWhiskiesSortedByKey,
  getWhiskiesFilteredByKeys,
} from '../utils/baseUtils';
import { WhiskyItem } from '../types/baseTypes';

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      whiskies: getWhiskyList(),
    },
  };
};

export default function Whiskies({ whiskies }: { whiskies: WhiskyItem[] }) {
  const [updatedWhiskies, setUpdatedWhiskies] = useState(whiskies);

  const onUpdateFilters = ({ filters: filtersUntyped, sortKey, sortDir }: TypeUrlQuery) => {
    const filters = !Array.isArray(filtersUntyped)
      ? [filtersUntyped]
      : filtersUntyped;
    const filtered = getWhiskiesFilteredByKeys(filters, whiskies);
    const sorted = getWhiskiesSortedByKey(sortKey, sortDir, filtered);
    setUpdatedWhiskies(sorted);
  }

  return (
    <Grid container spacing={8}>
      <Filters onUpdateFilters={onUpdateFilters} />
      {updatedWhiskies.map((w) => (
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
