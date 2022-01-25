import Link from 'next/link';

const MDXLink = ({ as, href, ...rest }: { as: string; href: string }) => {
  return (
    <Link as={as} href={href}>
      <a {...rest} />
    </Link>
  );
};

export default MDXLink;
