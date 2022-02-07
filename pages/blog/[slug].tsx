import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';

import Layout from '../../components/Layout';

import { components } from '../../components/mdx';

// import { getPaths, getFileSource } from '../../utils/markdown';

const Post: NextPage = ({
  frontmatter,
  markdown
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!frontmatter) return <></>;

  return (
    <Layout>
      <section>
        <div>
          <h1>{frontmatter.title}</h1>
        </div>

        <article>
          <ReactMarkdown sourcePos={} />
        </article>
      </section>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPaths('blog');

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const source = await getFileSource('blog', params.slug);

  return { props: { ...source } };
};
