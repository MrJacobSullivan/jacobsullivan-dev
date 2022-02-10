import * as React from 'react';
import { SiGithub } from 'react-icons/si';

const GithubLink: React.FunctionComponent<{ src: string; text?: string }> = ({
  src,
  text,
  ...rest
}) => (
  <a href={src} {...rest}>
    <SiGithub />
    {text && <p>{text}</p>}
  </a>
);

export default GithubLink;
