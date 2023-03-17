import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  line-height: 1.8;
  font-size: 16px;
  font-weight: 400px;

  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h2 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h2 {
    margin-top: 0px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid black;
    font-weight: 800;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
