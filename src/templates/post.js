import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div>
        <div>
          <Link to="/">
            Back to home
          </Link>
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql `    
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`