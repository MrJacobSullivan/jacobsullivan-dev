import * as React from 'react';
import NotFound from '../../components/NotFound';
import Markdown from '../../components/Markdown';
import {
  Folder,
  getAllArticleMetadata,
  getArticleBySlug
} from '../../utils/markdown';

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
  const { technologies, github, website, body } = content;

  return (
    <section className="w-full">
      <div>
        <div className="flex items-center justify-between w-full h-32 p-4 my-0 bg-gray-2 dark:bg-gray-8">
          <h1 className="pl-4 m-0">{title}</h1>

          <div className="flex flex-col items-end justify-end h-full">
            <div>
              <a
                className="pr-2 border-r"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={website}
                className="pl-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-6">
        <div>
          {technologies?.map((technology: string, i: number) => (
            <span key={i} className="mr-4">
              {technology}
            </span>
          ))}
        </div>
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
  const slug = params?.slug as string;
  const { data, content } = getArticleBySlug(Folder.work, slug);
  return { props: JSON.parse(JSON.stringify({ data, content })) };
};
