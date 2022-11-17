import React from 'react'
import Perfect from '../assets/perfect.png'

const Header = (props) => {
  return (
    <div>
        <div className=" hidden md:flex md:flex-col md:justify-around 0xl:flex-row pr-[10%] pl-[10%] 0xl:justify-between h-24 0xl:items-center bg-[#f2f7fa]">
            <h1 className='text-4xl font-medium'>Your Matches</h1>
            <div className="flex items-center">
                <span >A Perfect Match ® means you both match exactly what you’re looking for. </span>
                <img className='w-30 h-4' src={Perfect} alt="perfect" />
            </div>
        </div>
    </div>
  )
}

export default Header