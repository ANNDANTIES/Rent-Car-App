import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import Footer from '../src/components/Footer'
import Rent from './pages/Rent'
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewMore from './pages/Viewmore'
Route
function App() {
  

  return (
    <>
      <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path={'/viewmore/:id'} element={<ViewMore/>}/>
    </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
