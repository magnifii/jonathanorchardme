import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors, fonts } from './../../utils/theme'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const Navbar = styled.div`
      }
    `

    return (
      <div>
        <nav className="clearfix">
          <h1 className="logo float-left">
            <Link
              to="/"
            >
              Jonathan Orchard
            </Link>
          </h1>
          <ul className="float-right">
            <li>
              <a href="https://github.com/magnifii"
                className="nav-link"
                target="_blank"
              >
                Github
                </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jonathanorchard/"
                className="nav-link"
                target="_blank"
              >
                LinkedIn
                </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header