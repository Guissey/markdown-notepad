import './Markdown.css';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface MarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
  markdown: string;
  ref?: React.Ref<HTMLDivElement>;
};

const Markdown: React.FunctionComponent<MarkdownProps> = ({
  markdown,
  ref,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      ref={ref}
      className={
        'markdown'
        + (divProps.className ? ` ${divProps.className}` : '')
      }
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
