import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../../components/Layout';
import Section from '../../../components/Section';
import NotFound from '../../../components/NotFound';
import Card from '../../../components/Card';
import { getUserMap } from '../../../utils/baseUtils';
import { User } from '../../../types/baseTypes';

type Props = {
  user: null | User;
};

const userMap = getUserMap();

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params || !params.id) {
    return {
      props: {
        user: null,
      },
    };
  }

  const id = Array.isArray(params.id) ? '' : params.id;
  const user = userMap[id] || null;

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const userIds = Object.keys(userMap);
  return {
    paths: userIds.map(id => {
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
      <Section>
        {user ? <Card type="user" item={user} noLink /> : <NotFound />}
      </Section>
    </>
  );
}

UserPage.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="users">{page}</Layout>;
};

