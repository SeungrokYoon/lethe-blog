import styled from '@emotion/styled'
import { FunctionComponent, useMemo } from 'react'
import { PostFrontmatterType } from 'types/PostItem.types'
import PostItem from './PostItem'

export type PostType = {
  node: {
    id: string
    frontmatter: PostFrontmatterType
  }
}

type PostListProps = {
  selectedCategory: string
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

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) =>
          selectedCategory === 'All'
            ? true
            : categories.includes(selectedCategory),
      ),
    [selectedCategory],
  )

  return (
    <PostListWrapper>
      {postListData.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
