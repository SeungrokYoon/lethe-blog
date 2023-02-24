import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'POST item title',
  data: '2023.02.25',
  categories: ['Web', 'Frontend', 'Testing'],
  summary: 'This is a fake post summary data',
  thumbnail:
    'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  link: 'https://www.google.co.kr',
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
