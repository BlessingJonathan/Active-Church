
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import GivePage from './pages/GivePage'
import Watch_Live from './pages/Watch_Live'
import Contact_Us from './Pages/Contact_Us'


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
        path='contact-us'
        element = {<Contact_Us/>} 
        />
      </Routes>
    </>
  )
}

export default App
