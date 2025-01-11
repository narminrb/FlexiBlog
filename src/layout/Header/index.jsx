import React from 'react'
import {HeaderItems} from './HeaderItems'
import { Link } from 'react-router-dom'

const Header = () => {
    const navbarElements = [{
        id:1,
        name:"Home",
        url:'/'
    },
    {
    id:2,
    name:"Contact",
    url:'/contact'
}
]
  return (
    <header className="bg-white px-0 py-10 sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between  max-w-screen-lg">
      <Link to="#" className="flex items-center text-primary hover:text-secondary">
        <div>
          <img
            alt="name"
            src="https://flexiblog-minimal.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp"
          />
        </div>
      </Link>

      <div className="flex input justify-center col-span-1">
            <i className="ri-search-line"></i> 
          <input
            name="search"
            type="text"
            className=" border outline-none w-full"
            placeholder="Discover news,articles and more."
          />

        </div>


      <div className="md:hidden">
        <button
          id="menu-toggle"
          className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <nav className="hidden md:block">
        <HeaderItems navbarItems={navbarElements} />
      </nav>
    </div>
  </header>
  
  )
}

export default Header