import { useParams } from "react-router-dom"
import useFindPokemon from "../hooks/findPokemon"



const PokemonDetails: React.FC<{}> = () =>{


    const {pokemon: pokemonName} = useParams()
       
   

    const pokemon = useFindPokemon(pokemonName)

    if(pokemon.isLoading){
        return <div>Loading</div>
    }






    return(
        <div>
            {pokemon.data?.data.name}
            <img  src={pokemon.data?.data.sprites.other.dream_world.front_default} alt={pokemon.data?.data.name}/>
        </div>
    )

}


export default PokemonDetails