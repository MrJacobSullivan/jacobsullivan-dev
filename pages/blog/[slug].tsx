import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';

import Layout from '../../components/Layout';

import { components } from '../../components/mdx';

import { getPaths, getFileSource } from '../../utils/mdx';

const Post: NextPage = ({
  code,
  frontmatter
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDX = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <section>
        <div>
          <h1>{frontmatter.title}</h1>
        </div>

        <article>
          <MDX components={components} />
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
