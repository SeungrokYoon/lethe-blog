import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 3;
  grid-template-rows: 3;
  column-gap: 1em;
  row-gap: 1em;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 50px 0px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
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
