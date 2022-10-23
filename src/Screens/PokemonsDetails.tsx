import { useParams } from "react-router-dom"
import Header from "../components/Header/header"
import PokemonCard from "../components/PokemonSection/PokemonCard"
import useFindPokemon from "../hooks/findPokemon"




const PokemonDetails: React.FC<{}> = () =>{


    const {pokemon: pokemonName} = useParams()
       
   

    const pokemon = useFindPokemon(pokemonName)

    if(pokemon.isLoading){
        return <div>Loading</div>
    }


   




    return(
        
        <>
        <Header/>
        <div>
        <div className="flex w-full h-[100vh] bg-gray-900">
            <div className="container  flex  items-center justify-center">
              {pokemon.data && (
                <div>
                    <PokemonCard name={pokemon.data.data.name} showStats/>            
                </div>
              )}
            
            </div>
            
        </div>
        </div>
        </>
    )

}


export default PokemonDetails