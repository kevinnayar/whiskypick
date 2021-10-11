import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Card from '../components/Card';
import { getWhiskyList, getTopWhiskiesByType, WhiskyItem } from '../utils/baseUtils';

export default function Index() {
  const whiskyList: WhiskyItem[] = getWhiskyList();

  const topBourbons = getTopWhiskiesByType('Bourbon', 6, whiskyList);
  const topIrish = getTopWhiskiesByType('Irish', 6, whiskyList);
  const topRyes = getTopWhiskiesByType('Rye', 6, whiskyList);
  const topScotches = getTopWhiskiesByType('Scotch', 6, whiskyList);
  const topSingleMalts = getTopWhiskiesByType('Whisky', 6, whiskyList);

  return (
    <>
      <Section title="Top Bourbons">
        <Cards>
          {topBourbons.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Irish">
        <Cards>
          {topIrish.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Ryes">
        <Cards>
          {topRyes.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Scotches">
        <Cards>
          {topScotches.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Other Single Malts">
        <Cards>
          {topSingleMalts.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
    </>
  );
}

Index.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="home">{page}</Layout>;
};
