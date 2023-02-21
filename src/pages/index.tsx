import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'

const a = { a: 1, d: 2, c: 1 }

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Home" />
      <Link to="/info/">To Info</Link>
    </div>
  )
}

export default IndexPage
