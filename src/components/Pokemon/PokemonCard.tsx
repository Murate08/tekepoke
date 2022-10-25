import {Link} from 'react-router-dom'
import useFindPokemon from '../../hooks/findPokemon'
import {FiHeart} from 'react-icons/fi'
import '../../styles/global.css'




//interface pokemon card props
interface PokemonCardPorps{
    name:string;
    showStats?:boolean;
    favorited?: boolean;
}

//Pokemon Card component
const PokemonCard: React.FC<PokemonCardPorps>=({name, showStats, favorited})=>{
    const pokemon = useFindPokemon(name)
    const outherSprits = pokemon.data?.data.sprites.other
    
    


    //i get some constrain to handle on storage can you help
    const haldleToFavorite = () =>{
      localStorage.setItem('favorites',name)
      return(
        console.log(name)
      )   
    }

    return(
        <>
          <Link to={`/${name}`} className='group flex w-full flex-col bg-gray-800 rounded-lg shadow-md ml-8 mr-8 p-2 overflow-hidden lg:w-64  transition hover:shadow-black hover:scale-102'>
            <div className='w-full h-full flex justify-center'>
              <img className='h-40 object-contain'
                src={
                      outherSprits?.dream_world.front_default ||
                      outherSprits?.['official-artwork'].front_default
                      }
                        alt={pokemon.data?.data.name}
                  />
            </div>
            <div className='bg-gray-900 font-medium text-gray-200  mt-2 rounded-2xl hover:text-red uppercase  text-center py-4 group-hover:bg-gray-900'>
              {pokemon.data?.data.name}
            </div>
              {showStats && (
                <div className=''>
                  <div className='w-full mt-2 items-end justify-end flex '>
                    <button onClick={haldleToFavorite} className='bg-gray-900 p-2 rounded-2xl hover:scale-110'>
                      <FiHeart color='#9d0208'/>
                    </button>
                  </div>
                    {pokemon.data?.data.stats.map((stat)=>{
                      return(
                      <div className='grid grid-cols-2 items-center justify-center  space-y-2'>
                            <div className="text-gray-500 uppercase text-gray-400">{stat.stat.name}</div>
                              <div className='flex items-center space-x-2'>
                                <div className='w-full bg-gray-900  rounded-3xl h-3'>
                                    <div style={{width:`${stat.base_stat}%`}} className='h-full bg-red'></div>
                                </div>
                                  <div className='text-xs text-gray-400'>{stat.base_stat}</div>
                              </div>
                            </div>
                            )})}
                      </div>
                    )}
          </Link>
        </>
  )}

PokemonCard.defaultProps ={
    showStats:false
}

export default PokemonCard
