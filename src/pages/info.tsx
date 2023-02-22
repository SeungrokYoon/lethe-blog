import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'

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
      <Link to="/">To Main</Link>
      <span>{title}</span>
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
