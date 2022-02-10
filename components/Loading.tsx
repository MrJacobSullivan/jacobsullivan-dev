import * as React from 'react';
import Layout from './Layout';

const Loading = ({ withLayout = false }: { withLayout: boolean }) => {
  const content = () => <div>Loading</div>;
  if (withLayout) return <Layout>{content}</Layout>;
  return <div>{content}</div>;
};

export default Loading;
