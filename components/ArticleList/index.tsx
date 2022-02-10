import * as React from 'react';
import { ListContainer } from './styles';

const ArticleList = ({ components }: { components: React.ReactNode[] }) => {
  return <ListContainer>{...components}</ListContainer>;
};

export default ArticleList;
