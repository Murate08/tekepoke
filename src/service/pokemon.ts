import { PokemonsResponse, PokemonResponse} from '../@types/api'
import clinet from './client'


//Get Pokemons and Pokemon from Pokeapi

const getAllPokemons = async (): Promise<PokemonsResponse> =>  clinet.get('/pokemon?limit=2000')


const getPokemon = async (name: string): Promise<PokemonResponse> => clinet.get(`/pokemon/${name}`)

const pokemonApi = {
    getPokemon,
    getAllPokemons,
}


export default pokemonApi