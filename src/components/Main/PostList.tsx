import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import PostItem from './PostItem'

export type PostType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}

type PostListProps = {
  posts: PostType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  console.log(posts)
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
