import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../../components/Layout';
import Card from '../../../components/Card';
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
      {whisky ? <Card type="whisky" item={whisky} noLink /> : <NotFound />}
    </>
  );
}

WhiskyPage.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};

