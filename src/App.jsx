
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import GivePage from './pages/GivePage'
import Watch_Live from './pages/Watch_Live'
import Vision from "./pages/Vision"

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
         <Route
          path='/ourvision'
          element={
            <Vision />
          }
        />
      </Routes>
    </>
  )
}

export default App
