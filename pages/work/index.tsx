import * as React from 'react';
import Loading from '../../components/Loading';
import ArticleCard from '../../components/ArticleCard';
import { Folder, getAllArticleMetadata } from '../../utils/markdown';

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ArticleData } from '../../types/markdown';

const Work: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles
}) => {
  if (!articles) return <Loading withLayout />;

  return (
    <ul>
      {articles.map((article: ArticleData) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </ul>
  );
};

export default Work;

export const getStaticProps: GetStaticProps = () => {
  const articles = getAllArticleMetadata(Folder.work);
  articles.sort((a, b) => a.id - b.id);

  return { props: { articles } };
};
