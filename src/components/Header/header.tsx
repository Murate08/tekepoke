import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../../styles/global.css'

function Header() {
 

  return (
    <div className="w-screen h-[80px] z-10 bg-gray-800 fixed drop-shadow-lg">
            <header className='px-10 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-red'>TEKEPOKE</h1>
                </div>
                <div className='bg-gray-200 rounded w-[50px] h-[50px]'>
                </div>
            </header>  

    </div>
  )
}

export default Header
