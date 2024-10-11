import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Moto from './pages/Moto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/harley-react" element={<Home />} />
          <Route path="/moto" element={<Moto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
