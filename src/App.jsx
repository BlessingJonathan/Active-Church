
import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import GivePage from './pages/GivePage'
import Watch_Live from './pages/Watch_Live'
import Contact_Us from './pages/Contact_Us'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (

    <>
  
    <Navbar/>
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
        /> <Route
          path='/contactus'
          element={
            <Contact_Us />
          }
        />
      </Routes>
      <Footer/>
     
    </>
  )
}

export default App
