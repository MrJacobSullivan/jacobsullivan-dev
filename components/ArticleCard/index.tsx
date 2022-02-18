import * as React from 'react';
import Link from 'next/link';
import { ArticleData } from '../../types/markdown';

const ArticleCard: React.FC<{ article: ArticleData }> = ({ article }) => {
  return (
    <Link href={`/work/${article.slug}`}>
      <a className="block p-4 my-4 no-underline transition-colors duration-150 rounded hover:cursor-pointer bg-gray-4 dark:bg-gray-7 hover:dark:bg-gray-8 hover:bg-gray-5">
        {article.title}
      </a>
    </Link>
  );
};

export default ArticleCard;
