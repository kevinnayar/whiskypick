import type { NextPage, GetStaticProps } from 'next';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import { getUserList } from '../utils/baseUtils';
import { User } from '../types/baseTypes';

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      users: getUserList(),
    },
  };
};

export default function Users({ users }: { users: User[] }) {
  return (
    <Grid container spacing={8}>
      {users.map((u) => (
        <Grid key={u.id} item lg={3} md={4} sm={6} xs={12}>
          <Card type="user" item={u} />
        </Grid>
      ))}
    </Grid>
  );
}

Users.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="users">{page}</Layout>;
};
