import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../../components/Layout';
import Section from '../../../components/Section';
import NotFound from '../../../components/NotFound';
import Cards from '../../../components/Cards';
import Card from '../../../components/Card';
import { getWhiskyMap, WhiskyItem } from '../../../utils/baseUtils';

type Props = {
  whisky: null | WhiskyItem;
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params || !params.id) {
    return {
      props: {
        whisky: null,
      },
    };
  }

  const id = Array.isArray(params.id) ? '' : params.id;
  const whiskyMap = getWhiskyMap();
  const whisky = whiskyMap[id] || null;

  return {
    props: {
      whisky,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const whiskyIds = Object.keys(getWhiskyMap());
  return {
    paths: whiskyIds.map(id => {
      return {
        params: { id },
      };
    }),
    fallback: true,
  };
}

export default function Whisky({ whisky }: Props) {
  console.log({whisky});
  return (
    <>
      <Section>
        {whisky ? (
          <Card whisky={whisky} fullWidth />
        ) : (
           <NotFound />
        )}
        
      </Section>
    </>
  );
}

Whisky.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};

