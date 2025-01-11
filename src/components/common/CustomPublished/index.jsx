import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

const CustomPublished = ({desc,title,authorimage,author}) => {
  return (
    <div className=" mx-auto p-3 antialiased">
       <div className="h-[325px] w-[340px] transform duration-500 hover:-translate-y-1">
           <div
               className="shadow-md h-[325px] bg-white card flex flex-col  leading-normal p-2">
               <div className="p-4 pt-2 justify-between">
                   <div className="mb-8">
                   <div className='food max-w-[100px] p-1 mb-6'>
                       <p> Art & Culture</p>
                       </div>
                       <Link to="#" className="titles  font-bold h-[80px] inline-block">{title}</Link>
                       <p className="descrip">{desc}</p>
                   </div>
                   <div className="flex items-center">
                       <Link  className='w-[48px] h-[48px] overflow-hidden rounded-full mr-3'
                           to="#"><img className="w-full h-full object-cover" src={authorimage} alt={author}/></Link>
                       <div className="text-sm">
                           <Link to="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">{author}
                               </Link>
                           <p className="text-gray-600">Aug 18</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
  )
}

export default CustomPublished