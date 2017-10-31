import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import { colors } from '../utils/theme'

import Header from '../components/Header/Header'

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      background: colors.white,
    }}
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
