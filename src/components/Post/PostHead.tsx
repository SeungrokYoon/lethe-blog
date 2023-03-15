import styled from '@emotion/styled'
import {
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from 'gatsby-plugin-image'
import { FunctionComponent } from 'react'
import { ArrowLeft } from 'react-feather'

type PostHeadProps = {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgroundImage = styled((props: GatsbyImageProps) => (
  <GatsbyImage {...props} />
))`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
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

const PostHead: FunctionComponent<PostHeadProps> = function ({ thumbnail }) {
  const goBackPage = () => window.history.back()

  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <RoundIconButton onClick={goBackPage}>
        <ArrowLeft size={24} />
      </RoundIconButton>
    </PostHeadWrapper>
  )
}

export default PostHead
