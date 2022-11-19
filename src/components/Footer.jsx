import React from 'react'
import Fb from '../assets/fb.png'
import Ig from '../assets/ig.png'
import Twit from '../assets/twit.png'

const Footer = (props) => {
  return (
    <div className='bg-[#333] flex pl-[10%] pr-[10%] pt-[5%] pb-[5%] xs:flex-col md:flex-row  md:justify-between'>
        {/* left */}
        <div className="flex mb-3 justify-center">
            <div className='h-8 w-8 bg-white rounded-full flex items-center justify-center mr-3'><img className='h-4' src={Fb} alt="" /></div>
            <div  className='h-8 w-8 bg-white rounded-full flex items-center justify-center mr-3'><img className='h-4' src={Twit} alt="" /></div>
            <div  className='h-8 w-8 bg-white rounded-full flex items-center justify-center mr-3'><img className='h-4' src={Ig} alt="" /></div>
        </div>
        {/* Right  */}
        <div className="flex flex-col xs:items-center md:items-end text-white">
            <div className="top mb-3 text-xs"><p>©2022 Roommates.com®</p></div>
            <div className="bottom text-xs">
                <span className='cursor-pointer hover:text-blue-400'>Blog </span>|<span className='cursor-pointer hover:text-blue-400'> Mobile App </span>|<span className='cursor-pointer hover:text-blue-400'> Affiliates </span>|<span className='cursor-pointer hover:text-blue-400'> Terms </span>|<span className='cursor-pointer hover:text-blue-400'> Privacy </span>|<span className='cursor-pointer hover:text-blue-400'> Contact </span>|<span className='cursor-pointer hover:text-blue-400'> Sign out</span>
            </div>
        </div>
    </div>
  )
}

export default Footer