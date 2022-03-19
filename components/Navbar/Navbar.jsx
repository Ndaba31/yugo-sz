import React from 'react'
import s from './Navbar.module.css'
import {FaSearch, FaCartPlus} from 'react-icons/fa'
import { CategoryContext, ProductContext } from '../../pages'

const Navbar = () => {
  const products = React.useContext(ProductContext)
  const categories = React.useContext(CategoryContext)

  console.log(products, categories);

  return (
    <>
        <div className={s.navContainer}>
            <div className={s.navSidebarContainer}>
                <button className={s.navSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={s.sidebarIcon}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className={s.yugoLogo}>yugo</a>
            </div>
            <div className={s.navYugo}>
                <div className='tooltip tooltip-bottom' data-tip='search'>
                    <button className={s.navSidebar}>
                        <span className={s.rightIcons}><FaSearch /></span>
                    </button>
                </div>
                <div className='tooltip tooltip-bottom' data-tip='cart'>
                    <div className="badge badge-xs badge-error absolute right-2">5</div> 
                    <button className={s.navSidebar}>                
                        <span className={s.rightIcons}><FaCartPlus /></span>
                    </button>
                </div>
            </div>
        </div>
        <div className='hidden lg:block container'>
            <ul className="menu menu-horizontal p-0">
                <li className='m-2'><a>All</a></li>
                {categories.map(({id, name}) => (
                    <li key={id} className='m-2'><a>{name}</a></li>
                ))}                             
            </ul>
        </div>
    </>
  )
}

export default Navbar