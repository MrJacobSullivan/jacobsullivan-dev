import * as React from 'react';

import { ListContainer } from './ArticleList.styled';

const ArticleList = ({ components }: { components: React.ReactElement[] }) => {
  return <ListContainer>{...components}</ListContainer>;
};

export default ArticleList;
