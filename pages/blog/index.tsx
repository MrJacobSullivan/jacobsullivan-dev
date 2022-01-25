import * as React from 'react';

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import Layout from '../../components/Layout';

import { getAllFiles } from '../../utils/mdx';

interface Post {
  filePath: string;
  data: {
    title: string;
  };
}

const Blog: NextPage = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <ul>
        {posts.map((post: Post) => {
          <li key={post.filePath}>
            <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}>
              <a>{post.data.title}</a>
            </Link>
          </li>;
        })}
      </ul>
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllFiles('blog');

  return { props: { posts } };
};
