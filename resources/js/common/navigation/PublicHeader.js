// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Collapse } from 'reactstrap'
import NavItem from './NavItem'

// define component name
const displayName = 'PublicHeader'

// validate properties
const propTypes = {
  showNavigation: PropTypes.bool.isRequired,
}

// initiate comppnent
const PublicHeader = ({ showNavigation }) => (
  <Collapse className="navbar-collapse navbar-dark" isOpen={showNavigation}>
    <ul className="navbar-nav mr-auto">
        <NavItem path="/">Home</NavItem>
        <NavItem path="/">O nas</NavItem>
        <NavItem path="/">Cennik</NavItem>
        <NavItem path="/">Jazdy</NavItem>
    </ul>
    <ul className="navbar-nav">
    </ul>
  </Collapse>)

// bind properties
PublicHeader.displayName = displayName
PublicHeader.propTypes = propTypes

// export component
export default PublicHeader
