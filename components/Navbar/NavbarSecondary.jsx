import React from 'react'
import { CategoryContext } from '../../pages'
import s from './Navbar.module.css'

const NavbarSecondary = () => {
  const categories = React.useContext(CategoryContext)

  return (
    <div className={s.navSecondContainer}>
        <ul className={s.menuContainer}>
            <li className={s.links}><a>All</a></li>
            {categories.map(({id, name}) => (
                <li key={id} className={s.links}><a>{name}</a></li>
            ))}                          
        </ul>
    </div>
  )
}

export default NavbarSecondary