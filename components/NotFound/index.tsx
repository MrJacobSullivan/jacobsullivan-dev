import * as React from 'react';

const NotFound = ({ withLayout = false }) => {
  const content = () => <div>Not Found</div>;
  if (withLayout) return <div>{content}</div>; // TODO
  return <div>{content}</div>;
};

export default NotFound;
