import { PokemonsResponse, PokemonResponse} from '../@types/api'
import client from './client'


//Get Pokemons and Pokemon from Pokeapi

const getAllPokemons = async (): Promise<PokemonsResponse> =>  client.get('/pokemon?limit=2000')


const getPokemon = async (name: string): Promise<PokemonResponse> => client.get(`/pokemon/${name}`)

const pokemonApi = {
  getPokemon,
  getAllPokemons,
}


export default pokemonApi
