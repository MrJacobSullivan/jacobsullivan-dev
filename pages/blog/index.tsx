import * as React from 'react';

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';

import { Folder, getArticles } from '../../utils/markdown';
import type { Article } from '../../interfaces';

const Blog: NextPage = ({
  articles
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(articles);

  if (articles)
    return (
      <Layout>
        <ul>
          {articles.map((article: Article, index: number) => {
            console.log(article);
            return (
              <li key={index}>
                <Link href={`/blog/${article.metadata.slug}`}>
                  <a>{article.metadata.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    );

  return <div>loading...</div>;
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  const articles = getArticles(Folder.blog);

  return { props: { articles } };
};
