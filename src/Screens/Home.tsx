import Header from '../components/Header/header'
import Pokemons from '../components/PokemonSection/pokemons'


//Home screen
function HomeScreen() {

  return (
    <div className='w-full h-full bg-gray-900'>
      <Header/>
      <Pokemons/>
    </div>
  )
}

export default HomeScreen
