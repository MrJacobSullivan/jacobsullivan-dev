import * as React from 'react';
import Layout from '../Layout';

const NotFound = ({ withLayout = false }) => {
  const content = () => <div>Not Found</div>;
  if (withLayout) return <Layout>{content}</Layout>;
  return <div>{content}</div>;
};

export default NotFound;
