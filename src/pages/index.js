import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import { colors, fonts } from '../utils/theme'

class IndexPage extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const data = this.props.data

    const Button = styled.button`
      background: transparent;
      color: white;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid white;
      border-radius: 3px;
      font-family: Roboto;
      &:hover {
        background: #274156;
      }
    `

    return (
      <div>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div 
            key={node.slug}
            style={{
              marginTop: 10,
              padding: 20,
              background: colors.gradblue,
              color: colors.white,
            }}>
            <h3
              style={{
                textTransform: 'uppercase',
              }}>
                {node.title} 
                <br />
                <small
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}>
                    by {node.author.name} on {node.date}
                </small>
            </h3>
            <hr 
              style={{
                background: colors.white,
                width: "40%",
              }}/>
            <div 
              style={{
                width: "80%",
                fontFamily: fonts.body,
                fontWeight: 300,
                fontSize: 16,
              }}
              dangerouslySetInnerHTML={{ __html: node.content }} 
            />
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