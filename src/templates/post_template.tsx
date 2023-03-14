import Template from 'components/Common/Template'
import { graphql } from 'gatsby'
import { FunctionComponent } from 'react'

type PostTemplateProps = {}

const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props)
  return <Template>Post Template</Template>
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
