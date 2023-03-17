import styled from '@emotion/styled'
import {
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData,
} from 'gatsby-plugin-image'
import { FunctionComponent } from 'react'
import PostHeadInfo from './PostHeadInfo'

type PostHeadProps = {
  title: string
  date: string
  categories: string[]
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

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
