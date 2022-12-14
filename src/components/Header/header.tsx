import { Link } from 'react-router-dom'
import Poke from '../../assets/poke.png'

import '../../styles/global.css'
import Pagination from '../Pagination/Pagination'


//componet Header
function Header() {

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg">
      <header className='px-10 flex justify-between  bg-gray-900 items-center w-full h-full'>
        <Link to="/" className='flex items-center '>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-gray-200'>TEKEPOKE</h1>
        </Link>
        
        <div className='rounded w-[50px] h-[50px]'>
          <div  className='absolute bg-white flex items-center justify-center  h-[20px] w-[20px] rounded-3xl' >
            <span className="text-red text-m font-small">0</span>
          </div>
          <Link to='favorites' >
            <img src={Poke} />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
