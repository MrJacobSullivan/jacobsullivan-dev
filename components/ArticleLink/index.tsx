import * as React from 'react';
import Link from 'next/link';
import { Card, linkStyles } from './styles';

interface IProps {
  href: string;
}

const ArticleLink: React.FC<IProps> = ({ children, href }) => {
  return (
    <Card>
      <Link href={href}>
        <a css={linkStyles}>{children}</a>
      </Link>
    </Card>
  );
};

export default ArticleLink;
