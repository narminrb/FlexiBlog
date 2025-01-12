import React from 'react'
import "./style.scss"

const CustomSubscribe = () => {
  return (
    <div className="mt-12 md:mt-32 lg:mt-12 w-full m-auto flex flex-col items-center bg-white subscribe p-10 shadow-sm">
    <h3 className="head font-bold text-center">Subscribe to our newsletter!</h3>
    <p className=" des mt-3  max-w-[420px] text-center leading-6">
    We'll send you the best of our blog just once a month. We promise.
    </p>
    <div className=" inp mt-6 flex flex-col text-center w-full px-2 rounded-sm">
      <input
        className=" px-2 py-2 outline-none rounded text-gray-500"
        placeholder="Email Address"
      />
    </div>
      <button className="mt-5 butt md:ml-2 shadow-lg  text-white px-10 py-3">Subscribe</button>
  </div>
  
  )
}

export default CustomSubscribe