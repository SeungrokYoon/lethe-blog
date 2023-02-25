import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FunctionComponent } from 'react'

type PostItemProps = {
  title: string
  data: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const ThumbnailImage = styled.img`
  //부모인 wrapper의 그리드 너비 기준
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`

const Title = styled.div`
  margin-bottom: 3px;
  white-space: normal;
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Data = styled.div``
const Category = styled.div``
const CategoryItem = styled.div``
const Summary = styled.div``

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  data,
  categories,
  summary,
  thumbnail,
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage src={thumbnail} alt="Post Item Image" />
      <PostItemContent>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dolorum tempore qui illum hic aspernatur ut eos consequuntur
          distinctio consectetur harum tenetur, reiciendis alias adipisci id et
          voluptate, dignissimos dicta!
        </Title>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
