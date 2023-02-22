import React, { FunctionComponent } from 'react'
import GlobalStyle from 'components/Common/GlobalStyle'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
}

export default IndexPage
