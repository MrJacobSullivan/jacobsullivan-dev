import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Markdown: React.FC<{ content: string }> = ({ content }) => {
  const components: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  > = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');

      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          PreTag="div"
          language={match[1]}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className ? className : ''} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <article>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
};

export default Markdown;
