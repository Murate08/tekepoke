import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/global.css'
import { QueryClient, QueryClientProvider} from 'react-query'
import { AppStateProvider } from './states/AppState'
import HomeScreen from './Screens/Home'
import PokemonDetails from './Screens/PokemonsDetails'
import {FavoriteScreen} from './Screens/FavoritePokemons'



const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:false
    }
  }
})


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={<HomeScreen/>} />
            <Route path='/:pokemon' element={<PokemonDetails/>} />
            <Route path='/favorites' element={<FavoriteScreen/>} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </QueryClientProvider>
  )
}

export default App
