import * as React from 'react';
import NotFound from '../../components/NotFound';
import Markdown from '../../components/Markdown';
import {
  Folder,
  getAllArticleMetadata,
  getArticleBySlug
} from '../../utils/markdown';

import { Title, Date, Links } from '../../components/Article';

import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next';

const Project: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
  content
}) => {
  if (!data || !content) return <NotFound withLayout />;
  const { title } = data;
  const { date, description, technologies, tags, github, website, body } =
    content;

  return (
    <section className="w-full">
      <div>
        <Title text={title} />
      </div>

      <div>
        <Date date={date} />
        <Links links={{ github, website }} />

        <p>{description}</p>

        <h3>Technologies Used</h3>
        <ul>
          {technologies?.map((technology: string, i: number) => (
            <li key={i}>{technology}</li>
          ))}
        </ul>

        <ul>
          {tags?.map((tag: string, i: number) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>

      <Markdown content={body} />
    </section>
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
