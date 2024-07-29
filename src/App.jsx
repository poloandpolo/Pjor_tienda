import { LandingPage } from './pages/LandingPage'
import { MenPage } from './pages/MenPage'
import {WomenPage} from './pages/WomenPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='body'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='hombre' element={<MenPage />}></Route>
            <Route path='mujer' element={<WomenPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
