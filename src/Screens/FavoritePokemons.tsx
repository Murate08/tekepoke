import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../components/PokemonSection/PokemonCard'

import { FavoriteContext } from '../states/favorite'

//Favorite screeen
interface FavoriteProps{

}

export const FavoriteScreen: React.FC<FavoriteProps> = () =>{
  const {favorites} = useContext(FavoriteContext)
  
  return(
    <div className='bg-gray-900 h-[100vh] h-full flex'>
      <div className='m-10 text-gray-400'>
        <Link to='/'>Back</Link>
      </div>

      {favorites?.map((pokemon) => (
              <div key={pokemon.data?.name}>
                <div>{pokemon.data?.name}</div>
              </div>
            ))}
    </div>
  )
}



