import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Moto from './pages/Moto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moto" element={<Moto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
