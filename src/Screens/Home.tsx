import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from '../components/Header/header'
import Pokemons from '../components/PokemonSection/pokemons'

function HomeScreen() {
 

  return (
 
        <div className='w-screen h-full bg-gray-900'>
           <Header/>
            <Pokemons/>
        </div>
           
        
  
    
  )
}

export default HomeScreen
