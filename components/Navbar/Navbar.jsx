import React from 'react'
import s from './Navbar.module.css'
import {FaSearch, FaCartPlus} from 'react-icons/fa'

const Navbar = () => {
  return (
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
            <button className={s.navSidebar}>
                <span className={s.rightIcons}><FaSearch /></span>
            </button>
            <div className='w-fit'>
                <div className="badge badge-xs badge-error absolute right-2">5</div> 
                <button className={s.navSidebar}>                
                    <span className={s.rightIcons}><FaCartPlus /></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar