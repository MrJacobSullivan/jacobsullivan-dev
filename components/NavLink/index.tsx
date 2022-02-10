import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkStyles } from './styles';

const NavLink: React.FC<{ text: string; href: string; external?: boolean }> = ({
  text,
  href,
  external
}) => {
  const { pathname } = useRouter();

  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    if (pathname === '/') setIsActive(() => false);
    if (pathname.includes(href)) setIsActive(() => true);
    else setIsActive(() => false);
  }, [href, pathname]);

  if (external) {
    return (
      <a
        className={linkStyles(false)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={linkStyles(isActive)}>{text}</a>
    </Link>
  );
};

export default NavLink;
