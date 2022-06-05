import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Grid from '@mui/material/Grid';
import Layout from '../../../components/Layout';
import Card from '../../../components/Card/Card';
import NotFound from '../../../components/NotFound';
import { getWhiskyMap } from '../../../utils/baseUtils';
import { WhiskyItem } from '../../../types/baseTypes';

type Props = {
  whisky: null | WhiskyItem;
};

const whiskyMap = getWhiskyMap();

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params || !params.id) {
    return {
      props: {
        whisky: null,
      },
    };
  }

  const id = Array.isArray(params.id) ? '' : params.id;
  const whisky = whiskyMap[id] || null;

  return {
    props: {
      whisky,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const whiskyIds = Object.keys(whiskyMap);
  return {
    paths: whiskyIds.map(id => {
      return {
        params: { id },
      };
    }),
    fallback: true,
  };
}

export default function WhiskyPage({ whisky }: Props) {
  return (
    <>
      {whisky
        ? (
          <Grid container spacing={8}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card type="whisky" item={whisky} noLink />
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12}>
              <Card type="whisky" item={whisky} noLink />
            </Grid>
          </Grid>
        ) : (
          <NotFound />
        )
      }
    </>
  );
}

WhiskyPage.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};

