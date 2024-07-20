import { LandingPage } from './pages/LandingPage'
import { Header } from './components/Header'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
     <div className='body'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='men' element={<Header/>}></Route>
        <Route path='women' element={<Header/>}></Route>
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
