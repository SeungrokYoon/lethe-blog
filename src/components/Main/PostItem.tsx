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

const Date = styled.div`
  font-size: 14px;
  opacity: 0.8;
`
const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px -5px;
`
const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 10px;
  background-color: black;
  font-weight: 700;
  color: white;
`
const Summary = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.7;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
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
        <Date>2023.02.26</Date>
        <Category>
          <CategoryItem>카테고리1</CategoryItem>
          <CategoryItem>카테고리2</CategoryItem>
          <CategoryItem>카테고리3</CategoryItem>
        </Category>
        <Summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae
          maxime asperiores. Laudantium ad neque dignissimos, non itaque aperiam
          ab omnis delectus similique labore sunt laboriosam, amet voluptatum
          voluptatibus voluptate!
        </Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
