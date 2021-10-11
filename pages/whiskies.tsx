import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Card from '../components/Card';
import { getWhiskyList, WhiskyItem } from '../utils/baseUtils';

export default function Whiskies() {
  const whiskyList: WhiskyItem[] = getWhiskyList();
  return (
    <>
      <Section>
        <Cards>
          {whiskyList.map((w) => <Card key={w.id} whisky={w} />)}
        </Cards>
      </Section>
    </>
  );
}

Whiskies.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};
