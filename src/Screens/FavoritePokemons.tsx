import React from 'react'
import { Link } from 'react-router-dom'

//Favorite screeen
interface FavoriteProps{

}

export const FavoriteScreen: React.FC<FavoriteProps> = () =>{
  return(
    <div className='bg-gray-900 h-[100vh] h-full flex'>
      <div className='m-10 text-gray-400'>
        <Link to='/'>Back</Link>
      </div>
    </div>
  )
}



