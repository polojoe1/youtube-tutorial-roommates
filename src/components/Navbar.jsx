import React, { useState } from 'react'
import Logo from '../assets/logoRoom.png'
import Me from '../assets/me.png'

const Navbar = (props) => {
    const [open,setOpen]=useState(false)

    const burgerFlick = () =>{
        setOpen(!open)
        
    }
  return (
    <>
    <div className='pl-[10%] pr-[10%] sticky flex justify-between h-20 w-full bg-[#00a2db] m-auto'>

        {/* Hamburger Menu */}
        <div onClick={burgerFlick} className="md:hidden cursor-pointer flex w-[50%] justify-between items-center">
            <div className="flex justify-around items-center flex-col h-10">
                <div className="bg-white h-1 w-10"></div>
                <div className="bg-white h-1 w-10"></div>
                <div className="bg-white h-1 w-10"></div>
            </div>
            <p className="text-white font-semibold">MATCHES</p>
        </div>

        {/* Left */}
        <div className="flex text-white items-center">
            <img className='hidden md:flex h-10' src={Logo} alt="logo" />
            <span className='hidden lg:flex  ml-2 text-3xl font-medium'>roommates</span>
            <span className='hidden lg:flex text-sm mt-3'>.com</span>
        </div>

        {/* Right */}
        <div className="flex items-center">
            <ul className=' hidden md:flex text-white text-lg font-light cursor-pointer'>
                <li className='font-semibold underline decoration-green-400 decoration-4 mr-8'>MATCHES</li>
                <li className='hover:underline decoration-green-400 decoration-4 mr-8'>SEARCH</li>
                <li className='hover:underline decoration-green-400 decoration-4 mr-8'>FAVORITES</li>
                <li className='hover:underline decoration-green-400 decoration-4 mr-8'>MESSAGES</li>
            </ul>
            <img className='h-12 w-12 mr-8 rounded-full border-white border-[3px]' src={Me} alt="me" />
        </div>

        
    </div>
    {/* Hamburger when clicked */}

    {open?<div className="flex absolute z-[3] w-[100%] top-1 opacity-90 h-[100%] bg-[#00a2db] flex-col">
    <div className="flex justify-between items-center p-5">
        
        <div className="div flex items-center">
        <img className='h-16' src={Logo} alt="logo" />
            <span className='text-white ml-2 text-3xl font-bold'>roommates</span>
            <span className='text-white mt-3'>.com</span>
        </div>
        <p onClick={burgerFlick} className='text-white cursor-pointer font-black text-[3rem]'>X</p>
    </div>
    <ul className='flex flex-col items-center text-white text-[2rem] font-light cursor-pointer'>
        <li className='font-semibold underline decoration-green-400 decoration-4 mt-10'>MATCHES</li>
        <li className='hover:underline decoration-green-400 decoration-4 mt-10'>SEARCH</li>
        <li className='hover:underline decoration-green-400 decoration-4 mt-10'>FAVORITES</li>
        <li className='hover:underline decoration-green-400 decoration-4 mt-10'>MESSAGES</li>
    </ul>
</div>
:''}
</>
  )
}

export default Navbar