import * as React from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
}

const ArticleLink: React.FC<IProps> = ({ children, href }) => {
  return (
    <article>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </article>
  );
};

export default ArticleLink;
