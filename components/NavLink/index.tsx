import * as React from 'react';
import { useRouter } from 'next/router';
import { LinkContainer, linkStyles } from './styles';

const NavLink: React.FC<{ href: string; external?: boolean }> = ({
  children,
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
        css={linkStyles(false)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <LinkContainer href={href} isActive={isActive}>
      <a css={linkStyles(isActive)}>{children}</a>
    </LinkContainer>
  );
};

export default NavLink;
