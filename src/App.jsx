import { LandingPage } from './pages/LandingPage';
import { MenPage } from './pages/MenPage';
import { WomenPage } from './pages/WomenPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MenPageContextProvider } from './context/MenPage_context'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route
            path='hombre'
            element={
              <MenPageContextProvider>
                <MenPage />
              </MenPageContextProvider>
            }
          />
          <Route path='mujer' element={<WomenPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
