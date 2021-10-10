import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Card from '../components/Card';
import {
  getWhiskyList,
  Whisky,
} from '../utils/baseUtils';

export default function Whiskies() {
  const whiskyList: Whisky[] = getWhiskyList();
  return (
    <>
      <Section>
        <Cards>
          {whiskyList.map((whisky) => {
            const { id, name, brand } = whisky;
            return <Card key={id} link="" title={brand} subtitle={name} />;
          })}
        </Cards>
      </Section>
    </>
  );
}

Whiskies.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};
