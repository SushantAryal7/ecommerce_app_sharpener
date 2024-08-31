import React, { Fragment } from 'react'
import Navbarr from './Navbar'
import { Nav } from 'react-bootstrap'

function About() {
  return (
    <Fragment>
        <Navbarr />
        <Nav.Link href='home'>home</Nav.Link>
    </Fragment>
  )
}

export default About