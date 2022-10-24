import { useQuery } from "react-query"
import { pokemonApi } from "../service"



//Hook find Pokemon from API
const FindPokemon = (name:string | undefined) =>{
  return useQuery(["pokemon", name], ()=>{
    if(!name){
      return null
    }
      return  pokemonApi.getPokemon(name)
  })
}

export default FindPokemon
