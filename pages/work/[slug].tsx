import * as React from 'react';
import 'twin.macro';

import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';

import NotFound from '../../components/NotFound';
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';

import {
  Folder,
  getAllArticleMetadata,
  getArticleBySlug
} from '../../utils/markdown';

const Project: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
  content
}) => {
  if (!data || !content) return <NotFound withLayout />;

  return (
    <Layout>
      <section>
        <div>
          <h1>{data.title}</h1>
        </div>

        <Markdown content={content.body} />
      </section>
    </Layout>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleMetadata(Folder.work).map(
    ({ slug }) => `/${Folder.work}/${slug}`
  );

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  if (params) {
    const { data, content } = getArticleBySlug(
      Folder.work,
      params.slug as string
    );
    return { props: { data, content } };
  }

  return { props: { data: null, content: null } };
};
