
import './App.css'
import HomePage from './pages/HomePage'
import GivePage from './pages/GivePage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

      <div>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/give' element={<GivePage/>}/>
     </Routes>
      </div>
     

  )
}

export default App
