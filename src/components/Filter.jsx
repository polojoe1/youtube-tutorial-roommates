import React from 'react'
import List from '../assets/list.png'
import Map from '../assets/map.png'
const Filter = (props) => {
  return (
    <div className=' flex xs:flex-col md:flex-row md:justify-between w-full pr-[10%] pl-[10%] mt-8'>
        <div className="left mb-4 xs:w-full xs:pl-3 h-8 md:pl-1 md:w-[130px] flex md:items-center md:justify-center border-[0.2px] rounded-full border-slate-900">
            <span className='font-bold'>66 <span className='font-light'>matches! 🙌</span></span>
        </div>
        <div className="right mb-4 flex justify-center align-center">
            <div className="firstSelectTag mr-2">
                <span className='hidden md:inline'>Sort: </span>
                <select className='h-8 xs:w-[30vw] md:w-[110px] rounded-xs shadow-[0_2px_6px_0_rgba(0,0,0,0.3)] cursor-pointer hover:shadow-[#00a2db] ' name="" id="">
                    <option value="">Newest first</option>
                </select>
            </div>
            <div className="secondSelectTag mr-2">
                <span className='hidden md:inline'>Show:</span>
                <select className='h-8 xs:w-[30vw] md:w-[110px] rounded-xs shadow-[0_2px_6px_0_rgba(0,0,0,0.3)] cursor-pointer hover:shadow-[#00a2db] )' name="" id="">
                    <option value="">All matches</option>
                </select>
            </div>
            <div className="firstButton  shadow-inner h-8 w-8 rounded-sm flex flex-col justify-center items-center mr-2 bg-[#299fd6]">
                <div className="top flex">
                    <div className="bg-white h-[6px] w-[6px] mr-[1px] rounded-sm mb-[1px]"></div>
                    <div className="bg-white h-[6px] w-[6px] rounded-sm mb-[1px]"></div>
                </div>
                <div className="bottom flex">
                    <div className="bg-white h-[6px] w-[6px] mr-[1px] rounded-sm mb-[1px]"></div>
                    <div className="bg-white h-[6px] w-[6px] mr-[1px] rounded-sm mb-[1px]"></div>
                </div>
            </div>
            <div className="secondButton shadow-[0_2px_4px_rgba(0,0,0,0.3)] h-8 w-8 rounded-sm flex flex-col justify-center mr-2 items-center bg-white">
                <img className='h-3 w-4' src={List} alt="List" />
            </div>
            <div className="hidden lastButton h-8 w-8 rounded-sm md:flex flex-col justify-center items-center shadow-[0_2px_4px_rgba(0,0,0,0.3)] bg-white">
                <img className='h-4 w-4' src={Map} alt="Map" />
            </div>
        </div>
    </div>
  )
}

export default Filter