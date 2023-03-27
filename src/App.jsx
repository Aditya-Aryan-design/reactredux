import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signin from './components/Signin'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className='h-screen bg-neutral-100 flex flex-col justify-between'>
      <Header />
      <Routes>   
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App
