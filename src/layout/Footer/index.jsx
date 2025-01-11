import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="w-full bg-white mt-20 text-center">
        <div className="mx-auto bg-white max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <Link Link="https://pagedone.io/"  className="flex justify-center lg:justify-start">
                       <div>
                        <img alt="name" src='https://flexiblog-minimal.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp'/>
                       </div>
                    </Link>
                    <div className='mt-6 mb-6 text-start'><span className="text-md p-0 text-gray-500 ">©<Link to="https://pagedone.io/"></Link> 2025, All Rights Reserved.</span></div>
                    <Link to="#"  className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </Link>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Quick Links</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Link to="#"  className="text-gray-500 ">Advertise for us</Link></li>
                        <li className="mb-6"><Link to="#"  className=" text-gray-500">About us</Link></li>
                        <li className="mb-6"><Link to="#"  className=" text-gray-500 ">Contact us</Link></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Legal stuff</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Link to="#"  className="text-gray-600 hover:text-gray-900">Privacy Notice</Link></li>
                        <li className="mb-6"><Link to="#"  className=" text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
                        <li className="mb-6"><Link to="#"  className=" text-gray-600 hover:text-gray-900">Terms of Use</Link></li>

                    </ul>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Link to="#"  className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
                        <li className="mb-6"><Link to="#"  className=" text-gray-600 hover:text-gray-900">Quick Start</Link></li>
                        <li className="mb-6"><Link to="#"  className=" text-gray-600 hover:text-gray-900">Documentation</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer