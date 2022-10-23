import '../../styles/global.css'
import PokemonCard from './PokemonCard'
import { PokemonsResponseResutl } from '../../@types/api'
import { useApp } from '../../states/AppState'

function Pokemons() {

 const {pokemons} = useApp()

 if(pokemons.isLoading){
  return <div>"Loading"</div>
 }

  return (
    <div  className="flex items-center justify-center flex-col text-gray-200">
       
    
       <div className='flex flex-wrap justify-center items-center gap-2 mt-28'>
           
       {
            pokemons.data?.data.results.slice(0,100).map((pokemon: PokemonsResponseResutl)=>(
                <PokemonCard key={pokemon.name} name={pokemon.name} />
           ))}

       </div>

       
    </div>
  )
}

export default Pokemons








