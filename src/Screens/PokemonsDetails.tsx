import { useParams } from "react-router-dom"
import Header from "../components/Header/header"
import PokemonCard from "../components/PokemonSection/PokemonCard"
import useFindPokemon from "../hooks/findPokemon"



//Pokemon screen
const PokemonDetails: React.FC<{}> = () =>{
    const {pokemon: pokemonName} = useParams()
    const pokemon = useFindPokemon(pokemonName)

    if(pokemon.isLoading){
      return   (
        <div className="flex justify-center items-center">
          <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }

    return(
      <>
        <Header/>
        <div>
          <div className="flex w-full h-[100vh] bg-gray-900">
       
            <div className="container  flex  items-center justify-center">
              {pokemon.data && (
                <div className="flex w-[140vh] h-full justify-center items-center">
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
