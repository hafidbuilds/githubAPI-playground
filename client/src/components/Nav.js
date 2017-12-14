import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render(){
    return(
      <ul className='flex-nav'>
        <li>
          <NavLink exact activeClassName='activenav' to='/'>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='activenav' to='/battle'>
            <span>Battle</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='activenav' to='/popular'>
            <span>Popular</span>
          </NavLink>
        </li>
      </ul>
      )
  }
}

export default Nav