import * as React from 'react';
import SkillList from '../components/SkillList';
import content from '../content/home.json';
import { Folder, getFirstNArticles } from '../utils/markdown';

import type { GetStaticProps, NextPage } from 'next';
import { ArticleData } from '../types/markdown';

const Home: NextPage<{ articles: ArticleData[] }> = ({ articles }) => {
  return (
    <div>
      <h2>About Me</h2>
      <p>{content.about}</p>

      <h2>Skills</h2>
      <div className="grid grid-cols-3">
        <div className="w-min">
          <h3 className="p-2 px-4 rounded text-green-6 bg-gray-8">Frontend</h3>
          <SkillList skills={content.skills.frontend} />
        </div>
        <div className="w-min">
          <h3 className="p-2 px-4 rounded text-blue-5 bg-gray-8">Backend</h3>
          <SkillList skills={content.skills.backend} />
        </div>
        <div className="w-min">
          <h3 className="p-2 px-4 rounded text-yellow-5 bg-gray-8">
            Additional
          </h3>
          <SkillList skills={content.skills.backend} />
        </div>
      </div>

      {articles && (
        <>
          <h2>Projects</h2>

          <ul>
            {articles.map((article) => {
              return <li key={article.id}>{article.title}</li>;
            })}
          </ul>
        </>
      )}

      <h2>Experience</h2>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const articles = getFirstNArticles(Folder.work, 2);

  return { props: { articles } };
};
