import * as React from 'react';

const Loading = ({ withLayout = false }: { withLayout: boolean }) => {
  const content = () => <div>Loading</div>;
  if (withLayout) return <div>{content}</div>; // TODO
  return <div>{content}</div>;
};

export default Loading;
