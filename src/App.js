import React from 'react'
import './App.css'
import { Route } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = () => {
  return (
    <>
      <Navbar/>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>
      
    </>
  )
}

export default App

