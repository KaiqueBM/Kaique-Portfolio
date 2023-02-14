import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Home'

function App() {

  return (
    <div className="App">
      <Outlet />

    </div>
  )
}

export default App
