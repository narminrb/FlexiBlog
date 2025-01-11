import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

const CustomSubscribe = () => {
  return (
    <div class="mt-12 md:mt-32 lg:mt-12 w-full m-auto flex flex-col items-center bg-white subscribe p-10 shadow-sm">
    <h3 class="head font-bold text-center">Subscribe to our newsletter!</h3>
    <p class=" des mt-3  w-[420px] text-center leading-6">
    We'll send you the best of our blog just once a month. We promise.
    </p>
    <div class="mt-6 inp w-[280px] flex flex-col text-center w-full px-2 rounded-sm">
      <input
        class=" px-4 py-2 rounded text-gray-500"
        placeholder="Email Address"
      />
    </div>
      <button class="mt-5 butt md:ml-2 shadow-lg  text-white px-10 py-3">Subscribe</button>
  </div>
  
  )
}

export default CustomSubscribe