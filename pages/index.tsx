import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Cards from '../components/Cards';
import Card from '../components/Card';
import { getWhiskyList, getTopWhiskiesByType, Whisky } from '../utils/baseUtils';

export default function Index() {
  const whiskyList: Whisky[] = getWhiskyList();

  const topBourbons = getTopWhiskiesByType('Bourbon', 4, whiskyList);
  const topIrish = getTopWhiskiesByType('Irish', 4, whiskyList);
  const topRyes = getTopWhiskiesByType('Rye', 4, whiskyList);
  const topScotches = getTopWhiskiesByType('Scotch', 4, whiskyList);
  const topSingleMalts = getTopWhiskiesByType('Whisky', 4, whiskyList);

  return (
    <>
      <Section title="Top Bourbons">
        <Grid>
          <Cards>
            {topBourbons.map((whisky) => {
              const { id, name, brand } = whisky;
              return <Card key={id} link="" title={brand} subtitle={name} />;
            })}
          </Cards>
        </Grid>
      </Section>
      <Section title="Top Irish">
        <Grid>
          <Cards>
            {topIrish.map((whisky) => {
              const { id, name, brand } = whisky;
              return <Card key={id} link="" title={brand} subtitle={name} />;
            })}
          </Cards>
        </Grid>
      </Section>
      <Section title="Top Ryes">
        <Grid>
          <Cards>
            {topRyes.map((whisky) => {
              const { id, name, brand } = whisky;
              return <Card key={id} link="" title={brand} subtitle={name} />;
            })}
          </Cards>
        </Grid>
      </Section>
      <Section title="Top Scotches">
        <Grid>
          <Cards>
            {topScotches.map((whisky) => {
              const { id, name, brand } = whisky;
              return <Card key={id} link="" title={brand} subtitle={name} />;
            })}
          </Cards>
        </Grid>
      </Section>
      <Section title="Top Other Single Malts">
        <Grid>
          <Cards>
            {topSingleMalts.map((whisky) => {
              const { id, name, brand } = whisky;
              return <Card key={id} link="" title={brand} subtitle={name} />;
            })}
          </Cards>
        </Grid>
      </Section>
    </>
  );
}

Index.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="home">{page}</Layout>;
};
