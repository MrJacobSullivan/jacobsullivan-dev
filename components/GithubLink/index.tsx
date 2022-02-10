import * as React from 'react';
import { Github } from './styles';

const GithubLink: React.FunctionComponent<{ src: string; text?: string }> = ({
  src,
  text,
  ...rest
}) => (
  <a href={src} {...rest}>
    <Github />
    {text && <p>{text}</p>}
  </a>
);

export default GithubLink;
