import * as React from 'react';

export const Links: React.FC<{
  links: { github: string; website: string };
}> = ({ links: { github, website }, ...rest }) => {
  return (
    <div {...rest}>
      <a
        href={github}
        className="pr-2 border-r"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href={website}
        className="pl-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>
    </div>
  );
};
