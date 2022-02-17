import * as React from 'react';
// import SkillList from '../components/SkillList';
import ArticleCard from '../components/ArticleCard';
import { Folder, getFirstNArticles } from '../utils/markdown';
import content from '../content/home.json';

import type { GetStaticProps, NextPage } from 'next';
import { ArticleData } from '../types/markdown';

const Home: NextPage<{ articles: ArticleData[] }> = ({ articles }) => {
  return (
    <div>
      <h2>About Me</h2>
      <p>{content.about}</p>

      {/* <h2>Skills</h2>
      <div className="flex justify-around">
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
      </div> */}

      {articles && (
        <>
          <h2>Projects</h2>

          <ul>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const articles = getFirstNArticles(Folder.work, 2);

  return { props: { articles } };
};
