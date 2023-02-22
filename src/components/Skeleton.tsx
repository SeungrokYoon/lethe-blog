import { css } from '@emotion/react'
import styled from '@emotion/styled'

const skeleton = css`
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`
const skeletonText = css`
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.25rem;
`

function CircleSkeleton() {
  return <Skeleton className="circle"></Skeleton>
}
function BoxSkeleton({ className }: { className: string }) {
  return <Skeleton className={className} />
}

function Div() {
  return <StyledDiv />
}

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

const Skeleton = styled.div`
  width: 100px;
  height: 100px;
  &.skeleton {
    ${skeleton}
  }
  &.skeleton-text {
    ${skeletonText}
  }
  &.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  &.box,
  &.circle {
    animation: shimmer 1s linear infinite;
    background-size: 400%;
    background-image: linear-gradient(
      to right,
      #f2f2f2 0%,
      #f2f2f2 30%,
      #d9d9d9 45%,
      #d9d9d9 50%,
      #f2f2f2 60%,
      #f2f2f2 100%
    );
  }
  @keyframes shimmer {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`

export { Skeleton, CircleSkeleton, BoxSkeleton, Div }
