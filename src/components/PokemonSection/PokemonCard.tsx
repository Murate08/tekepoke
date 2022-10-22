import { useState, useEffect } from 'react'
import {useQuery} from 'react-query'
import {Link} from 'react-router-dom'
import useFindPokemon from '../../hooks/findPokemon'
import { pokemonApi } from '../../service'
import '../../styles/global.css'


interface PokemonCardPorps{
    name:string
}


const PokemonCard: React.FC<PokemonCardPorps>=({name})=>{
    const pokemon = useFindPokemon(name)

    if(pokemon.isLoading){
        return<div>Loading</div>
    }



    return(
        <Link to={`/${name}`} className='group flex w-full flex-col bg-gray-800 rounded-lg shadow-md m-8 overflow-hidden sm:w-52 transition hover:shadow-black hover:scale-110'>
            <div className='w-full h-48 flex justify-center items-center '>
                <img className='h-40 object-contain' src={pokemon.data?.data.sprites.other.dream_world.front_default} alt={pokemon.data?.data.name}/>
            </div>
            <div className='bg-gray-900  text-gray-200  hover:text-red uppercase  text-center py-4 group-hover:bg-gray-900'>{pokemon.data?.data.name}</div>
        </Link>
    )




    
}

export default PokemonCard