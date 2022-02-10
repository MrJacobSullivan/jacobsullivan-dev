import * as React from 'react';
import Link from 'next/link';

const ArticleLink: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <div className="p-4 rounded bg-gray-5">
      <Link href={href}>
        <a className="text-gray-9 hover:cursor-pointer">{children}</a>
      </Link>
    </div>
  );
};

export default ArticleLink;
