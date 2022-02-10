import * as React from 'react';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Loading from '../../components/Loading';
import ArticleLink from '../../components/ArticleLink';
import { Folder, getAllArticleMetadata } from '../../utils/markdown';
import type { ArticleData } from '../../types/markdown';

const Work: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles
}) => {
  if (!articles) return <Loading withLayout />;

  return (
    <ul>
      {articles.map(({ slug, title }: ArticleData) => {
        return (
          <ArticleLink key={slug} href={`/work/${slug}`}>
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

  return { props: { articles } };
};
