import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { ArrowLeft } from 'react-feather'

type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: white;
`

const RoundIconButton = styled.button`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: translateY(1%);
    ::after {
      position: absolute;
      left: 110%;
      border-radius: 10px;
      content: 'Go Back';
      font-size: 14px;
      padding: 2px 10px;
      color: white;
      background-color: navy;
      white-space: nowrap;
    }
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;
`

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  const goBackPage = () => history.back()

  return (
    <PostHeadInfoWrapper>
      <RoundIconButton onClick={goBackPage}>
        <ArrowLeft size={24} />
      </RoundIconButton>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
