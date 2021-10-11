import * as react from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Section from '../../../components/Section';
import Cards from '../../../components/Cards';
import Card from '../../../components/Card';
import { getWhiskyMap, WhiskyItem } from '../../../utils/baseUtils';

export default function Whisky() {
  const router = useRouter();
  const { id } = router.query;
  const whiskyMap = getWhiskyMap();
  // @ts-ignore
  const whiskyMaybe = whiskyMap[id];

  console.log({whiskyMaybe});

  console.log({id});
  return (
    <>
      <Section>
        <Cards>
          <p>hll</p>
        </Cards>
      </Section>
    </>
  );
}

Whisky.getLayout = function getLayout(page: NextPage) {
  return <Layout pageTitle="whiskies">{page}</Layout>;
};

