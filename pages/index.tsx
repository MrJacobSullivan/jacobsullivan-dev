import * as React from 'react';
import content from '../content/home.json';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>{content.about}</p>
    </div>
  );
};

export default Home;
