import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavLink to='/'>A La Parrilla</NavLink>
              <NavIcon onClick={toggle}>
                  <p></p>
                  <Bars />
              </NavIcon>
          </Nav>
        </>
    )
}

export default Navbar