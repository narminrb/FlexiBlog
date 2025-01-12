import React, { useEffect, useState } from 'react'
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
useEffect(() => {
  const endpoints = ['data', 'articlestext','artdata','publisheddata']; 
  Promise.all(
    endpoints.map((endpoint) =>
      fetch(`http://localhost:3001/${endpoint}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
          return res.json();
        })
    )
  )
    .then((results) => {
      const combinedData = results.flat(); 
      setFilterData(combinedData); 
    })
    .catch((err) => console.error("Error fetching resources:", err));
}, []);


const [data,setData] = useState([]);
const [filterData, setFilterData] = useState([]);

const handleFilter = (value) => {
  const res = filterData.filter(f => f.title.toLowerCase().includes(value))
  setData(res);
  if(value === ""){
    setData([])
  }
}

  return (
    <header className="bg-white px-0 py-8 sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between  max-w-screen-lg">
      <Link to="#" className="flex items-center text-primary hover:text-secondary">
        <div>
          <img
            alt="name"
            src="https://flexiblog-minimal.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp"
          />
        </div>
      </Link>

    <div>
    <div className="flex input justify-center col-span-1">
            <i className="ri-search-line"></i> 
          <input
            name="search"
            type="text"
            onChange={e => handleFilter(e.target.value)}
            className=" border outline-none w-full"
            placeholder="Discover news,articles and more."
          />

        <div className='search-result'>
          {
            data && data.map((d, i) => (
              <div key={i}>
                {d.title}
              </div>
            ))
          }
        </div>
        </div>
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