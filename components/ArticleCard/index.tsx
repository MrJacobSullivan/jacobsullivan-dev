import * as React from 'react';
import Link from 'next/link';
import { ArticleData } from '../../types/markdown';

const ArticleCard: React.FC<{ article: ArticleData }> = ({ article }) => {
  return (
    <div className="p-4 rounded bg-gray-5">
      <Link href={`/work/${article.slug}`}>
        <a className="text-gray-9 hover:cursor-pointer">{article.title}</a>
      </Link>
    </div>
  );
};

export default ArticleCard;
