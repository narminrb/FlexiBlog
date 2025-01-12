import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'

const CustomArticleText = ({title,desc,date,author}) => {
  return (
    <section className="mb-3 antialiased">
    <div className="flex flex-col justify-center transform duration-500 hover:-translate-y-1">
        <div className="smallcard flex flex-col h-full shadow justify-between  p-3 bg-white">
            <div>
                <div className="my-1">
                    <p className='title'>{title}.</p>
                </div>
            </div>
            <div><Link className="author inline-flex font-bold items-center border-2 border-transparent outline-none focus:ring-1 focus:ring-offset-2 focus:ring-link active:bg-link active:text-gray-700 active:ring-0 active:ring-offset-0 leading-normal bg-link hover:bg-opacity-80 rounded-lg"
                    aria-label="Quick Start" target="_self" href="/learn">{author}<svg
                         width="20" height="20" viewBox="0 0 20 20"
                        className="duration-100 ease-in transition -rotate-90 inline ml-1"
                       >
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</section>

  )
}

export default CustomArticleText