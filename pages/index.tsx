import type { NextPage, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getWhiskyList, getTopWhiskiesByType } from '../utils/baseUtils';
import { WhiskyItem } from '../types/baseTypes';

const Section = ({ title, whiskies }: { title: string, whiskies: WhiskyItem[] }) => {
  return (
    <Box sx={{ marginBottom: '3rem' }}>
      <Typography variant="h2">
        {title}
      </Typography>
      <Grid container spacing={8}>
        {whiskies.map((w) => <Card key={w.id} type="whisky" item={w} />)}
      </Grid>
    </Box>
  );
}

type Props = {
  bourbons: WhiskyItem[],
  irish: WhiskyItem[],
  ryes: WhiskyItem[],
  scotches: WhiskyItem[],
  singleMalts: WhiskyItem[],
};

export const getStaticProps: GetStaticProps = () => {
  const whiskyList: WhiskyItem[] = getWhiskyList();
  const limit = 4;

  const props: Props = {
    bourbons: getTopWhiskiesByType('Bourbon', limit, whiskyList),
    irish: getTopWhiskiesByType('Irish', limit, whiskyList),
    ryes: getTopWhiskiesByType('Rye', limit, whiskyList),
    scotches: getTopWhiskiesByType('Scotch', limit, whiskyList),
    singleMalts: getTopWhiskiesByType('Whisky', limit, whiskyList),
  };

  return { props };
};

export default function Index({ bourbons, irish, ryes, scotches, singleMalts }: Props) {
  return (
    <Container maxWidth="xl">
      <Section title="Top Bourbons" whiskies={bourbons} />
      <Section title="Top Irish" whiskies={irish} />
      <Section title="Top Ryes" whiskies={ryes} />
      <Section title="Top Scotches" whiskies={scotches} />
      <Section title="Top Single Malts" whiskies={singleMalts} />
    </Container>
  );
}

Index.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="home">{page}</Layout>;
};
