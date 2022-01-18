import * as React from 'react';

import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Section from '../components/Section';

const Home: NextPage = () => {
  return (
    <Layout>
      <Section title="Intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ut unde magni placeat voluptates quas quasi, eum quae ab porro
          nesciunt nulla suscipit esse quaerat cumque hic, quia qui tempore!
        </p>
      </Section>
    </Layout>
  );
};

export default Home;
