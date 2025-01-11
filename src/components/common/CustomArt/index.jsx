import React from 'react'
import { Link } from 'react-router-dom'

const CustomArt = ({image,desc,title}) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="gap-10">
        <div
            className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img alt={title} src={image} className="w-full mb-3"/>
            <div className="p-4 pt-2">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2"
                            viewBox="0 0 20 20">
                            <path
                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                            </path>
                        </svg>
                        Members only
                    </p>
                    <Link to="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Can
                        coffee make you a better developer?</Link>
                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <Link
                        to="#"><img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/></Link>
                    <div className="text-sm">
                        <Link to="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                            Reinink</Link>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CustomArt