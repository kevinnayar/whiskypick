import type { NextPage, GetStaticProps } from 'next';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout';
import Card from '../components/Card';
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
      {users.map((u) => <Card key={u.id} type="user" item={u} />)}
    </Grid>
  );
}

Users.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="users">{page}</Layout>;
};
