import type { NextPage, GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Card from '../components/Card';
import { getWhiskyList, WhiskyItem } from '../utils/baseUtils';

type Props = {
  whiskies: WhiskyItem[];
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      whiskies: getWhiskyList(),
    },
  };
};

export default function Whiskies({ whiskies }: Props) {
  return (
    <>
      <Section>
        <Cards>
          {whiskies.map((w) => <Card key={w.id} whisky={w} />)}
        </Cards>
      </Section>
    </>
  );
}

Whiskies.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};
