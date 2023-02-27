import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank you for Visiting My First Gatsby Blog, Have a Good Day 😆
      <br />
      ©2023 Developer Seungrok Yoon (Lethe), Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
