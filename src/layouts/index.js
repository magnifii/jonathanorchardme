import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../utils/styling/main.scss'
import { colors } from '../utils/theme'

import Header from '../components/Header/Header'

const TemplateWrapper = ({ children }) => (
  <div className="main"
    >
    <Helmet
      title="Jonathan Orchard"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        marginTop: 0,
      }}>
        {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
