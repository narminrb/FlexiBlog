import React from 'react'
import "./style.scss"

const CustomArticles = ({name,desc,image}) => {
  return (
    <section className="max-w-screen-lg container mx-auto antialiased rounded-xl overflow-hidden">
    <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
      
      <div className="w-full md:w-1/2">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
  
      <div className="w-full md:w-1/2 py-5 pt-20 bg-white">
        <div className="px-5 ">
        <div className='food max-w-[100px] p-1 my-2'>
           <p> Food & Drink</p>
        </div>
          <h1 className="name">{name}</h1>
          <p className="desc leading-relaxed">
            {desc}
          </p>
        </div>
  
        <div className="text-sm leading-6 pb-10">
          <figure className="relative flex flex-col-reverse rounded-lg p-2 dark:bg-slate-800 dark:highlight-white/5">
            <figcaption className="flex items-center space-x-4">
              <img
                src="https://flexiblog-minimal.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/a3542/jane-smith.webp"
                alt=""
                className="flex-none w-14 h-14 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-auto">
                <div className="author-name text-base">
                Jane Smith
                </div>
                <div className="mt-0.5 dark:text-slate-300">Web Developer</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      
    </article>
  </section>
  
  )
}

export default CustomArticles