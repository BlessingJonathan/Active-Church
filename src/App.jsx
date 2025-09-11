
import './App.css'
import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import GivePage from './Pages/GivePage'
import Watch_Live from './Pages/Watch_Live/Watch_Live'


function App() {

  return (

    <>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage />
          }
        />
        <Route
          path='/give'
          element={
            <GivePage />
          } />
        <Route
          path='/watchlive'
          element={
            <Watch_Live />
          }
        />
      </Routes>
    </>
  )
}

export default App
