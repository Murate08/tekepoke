import { useParams } from "react-router-dom"
import Header from "../components/Header/header"
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
        <div className="flex group  flex-col p-12 justify-center items-center w-full h-[100vh] bg-gray-900">
            <div className="w-full flex-col group group py-20 m-40 flex justify-center items-center bg-gray-800 rounded-lg">
                <div >
                    <img  src={pokemon.data?.data.sprites.other.dream_world.front_default} alt={pokemon.data?.data.name}/>
                </div>
                <div>{pokemon.data?.data.name}</div>
                
            </div>
            
        </div>
        </>
    )

}


export default PokemonDetails