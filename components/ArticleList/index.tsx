import * as React from 'react';

const ArticleList = ({ components }: { components: React.ReactNode[] }) => {
  return <ul>{...components}</ul>;
};

export default ArticleList;
