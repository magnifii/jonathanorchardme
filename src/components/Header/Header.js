import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors, fonts } from './../../utils/theme'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Topbar = styled.div`
      background-color: #08ccb5;
      height: 0.5rem;
    `

    const Navbar = styled.div`
      color: white;
      font-family: Roboto;
      font-weight: 400;
      font-size: 0.8rem;
      text-transform: uppercase;

      ul {
        margin-left: 4rem;
        display: inline-block;
        li {
          display: inline-block;
          .nav-link {
            color: white;
            text-decoration: none;
            margin-right: 1rem;
            &:hover {
              color: #52E5E7;
            }
          }
        }
      }
    `

    return (
      <div>
        <Topbar />
        <div
          style={{
            background: colors.darkblue,
            padding: 20,
            height: 'auto',
          }}>
          <h1 style={{ 
            margin: 0,
            fontSize: '1.2rem', 
            textTransform: 'uppercase',
            float: 'left',
            }}>
            <Link
              to="/"
              style={{
                color: colors.white,
                textDecoration: 'none',
              }}
            >
              Jonathan Orchard
            </Link>
          </h1>
          <Navbar>
            <ul >
              <li>
                <a href="https://www.linkedin.com/in/jonathanorchard/" 
                  className="nav-link"
                  target="_blank"
                  >
                    LinkedIn
                </a>
              </li>
            </ul>
          </Navbar>
        </div>
      </div>
    )
  }
}

export default Header