import * as React from 'react';

const Section: React.FC<{ title?: String }> = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
