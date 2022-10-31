import React from 'react'
import Footer from './components/Footer'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

import './App.css'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </Router> */}
      <Footer></Footer>
    </>
  )
}

export default App