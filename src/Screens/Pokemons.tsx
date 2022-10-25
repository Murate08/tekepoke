import '../styles/global.css'
import PokemonCard from '../components/Pokemon/PokemonCard'
import { PokemonsResponseResutl } from '../@types/api'
import { useApp } from '../states/AppState'
import Pagination from '../components/Pagination/Pagination'
import { useState } from 'react'



function Pokemons() {

 const {pokemons} = useApp()

 if(pokemons.isLoading){
  return   (
    <div className="flex justify-center items-center">
      <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
 }


  return (
    <div  className="flex items-center justify-center flex-col text-gray-200">
      <div className='flex flex-wrap justify-center items-center gap-2 mt-28'>
       {
          pokemons.data?.data.results.slice(10,90).map((pokemon: PokemonsResponseResutl)=>(
            <PokemonCard key={pokemon.name} name={pokemon.name} />
         
          ))}
      </div>
      <Pagination/>
    </div>
  )
}

export default Pokemons








