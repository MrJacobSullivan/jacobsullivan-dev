import * as React from 'react';

const SkillList: React.FC<{ skills: string[]; className?: string }> = ({
  skills,
  className,
  ...rest
}) => (
  <ul className={className} {...rest}>
    {skills.map((skill: string, i: number) => (
      <li key={i}>{skill}</li>
    ))}
  </ul>
);

export default SkillList;
