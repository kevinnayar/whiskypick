import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Grid from '@mui/material/Grid';
import NotFound from '../../../components/NotFound';
import Layout from '../../../components/Layout';
import Card from '../../../components/Card/Card';
import { getUserMap } from '../../../utils/baseUtils';
import { User } from '../../../types/baseTypes';

type Props = {
  user: null | User;
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params || !params.id) {
    return {
      props: {
        user: null,
      },
    };
  }

  const userMap = getUserMap();
  const id = Array.isArray(params.id) ? '' : params.id;
  const user = userMap[id] || null;

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const userMap = getUserMap();
  return {
    paths: Object.keys(userMap).map(id => {
      return {
        params: { id },
      };
    }),
    fallback: true,
  };
}

export default function UserPage({ user }: Props) {
  return (
    <>
      {user
        ? (
          <Grid container spacing={8}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Card type="user" item={user} noLink />
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12}>
              <Grid container spacing={8}>
                {user.favorites.map((w) => (
                  <Grid key={w.id} item lg={4} md={6} sm={6} xs={12}>
                    <Card type="whisky" item={w} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <NotFound />
        )
      }
    </>
  );
}

UserPage.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="users">{page}</Layout>;
};

