import * as React from 'react';

import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Section from '../components/Section';

const Home: NextPage = () => {
  return (
    <Layout>
      <Section title="Intro">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi placeat
          quia totam. Ad consequatur aliquam repellat obcaecati tempora
          provident hic debitis, suscipit deleniti. Cupiditate quisquam, omnis
          illum ut accusantium error.
        </p>
      </Section>
    </Layout>
  );
};

export default Home;
