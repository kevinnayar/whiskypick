import type { NextPage, GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Cards from '../components/Cards';
import Card from '../components/Card';
import { getWhiskyList, getTopWhiskiesByType, WhiskyItem } from '../utils/baseUtils';

type Props = {
  bourbons: WhiskyItem[],
  irish: WhiskyItem[],
  ryes: WhiskyItem[],
  scotches: WhiskyItem[],
  singleMalts: WhiskyItem[],
};

export const getStaticProps: GetStaticProps = () => {
  const whiskyList: WhiskyItem[] = getWhiskyList();

  const props: Props = {
    bourbons: getTopWhiskiesByType('Bourbon', 6, whiskyList),
    irish: getTopWhiskiesByType('Irish', 6, whiskyList),
    ryes: getTopWhiskiesByType('Rye', 6, whiskyList),
    scotches: getTopWhiskiesByType('Scotch', 6, whiskyList),
    singleMalts: getTopWhiskiesByType('Whisky', 6, whiskyList),
  };

  return { props };
};

export default function Index({ bourbons, irish, ryes, scotches, singleMalts }: Props) {
  return (
    <>
      <Section title="Top Bourbons">
        <Cards>
          {bourbons.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Irish">
        <Cards>
          {irish.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Ryes">
        <Cards>
          {ryes.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Scotches">
        <Cards>
          {scotches.map((w) => (
            <Card key={w.id} whisky={w} />
          ))}
        </Cards>
      </Section>
      <Section title="Top Other Single Malts">
        <Cards>
          {singleMalts.map((w) => (
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
