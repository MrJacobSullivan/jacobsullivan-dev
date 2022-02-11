import * as React from 'react';
import Loading from '../../components/Loading';
import ArticleLink from '../../components/ArticleLink';
import { Folder, getAllArticleMetadata } from '../../utils/markdown';

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { ArticleData } from '../../types/markdown';

const Work: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles
}) => {
  if (!articles) return <Loading withLayout />;

  return (
    <ul>
      {articles.map(({ id, slug, title }: ArticleData) => {
        return (
          <ArticleLink key={id} href={`/work/${slug}`}>
            {title}
          </ArticleLink>
        );
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
