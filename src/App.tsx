import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/global.css'
import HomeScreen from './Screens/Home'
import PokemonDetails from './Screens/PokemonsDetails'

import { QueryClient, QueryClientProvider} from 'react-query'
import { AppStateProvider } from './states/AppState'


const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<HomeScreen/>} />
          <Route path='/:pokemon' element={<PokemonDetails/>} />
        </Routes>
      </BrowserRouter>
      </AppStateProvider>
    </QueryClientProvider>
  )
}

export default App
