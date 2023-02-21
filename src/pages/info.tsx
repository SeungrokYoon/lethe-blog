import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import Text from 'components/Text'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text="Hello" />
      <Link to="/">To Main</Link>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
