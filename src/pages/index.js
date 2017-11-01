import React, { Component } from 'react'
import Link from 'gatsby-link'

import { colors, fonts } from '../utils/theme'

class IndexPage extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const data = this.props.data

    return (
      <div>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div 
            key={node.slug}
            style={{
              marginTop: 40,
            }}
            className="row post">
            <div className="column column-40 column-offset-10 post-text">
              <h3
                style={{
                  textTransform: 'uppercase',
                }}>
                  {node.title} 
                  <br />
                  <span className="label label-green">{node.author.name}</span> <span className="label label-green">{node.date}</span>
              </h3>
              <hr 
                style={{
                  background: colors.white,
                  width: "100%",
                }}/>
              <div 
                style={{
                  width: "90%",
                  fontFamily: fonts.body,
                  fontWeight: 300,
                  fontSize: 16,
                }}
                dangerouslySetInnerHTML={{ __html: node.content }} 
              />
            </div>
            <div className="column column-40 post-image">
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql `
  query homePageQuery {      
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          content
          slug
          date(formatString: "YYYY-MM-DD")
          author {
            name
          }
        }
      }
    }
  }
`