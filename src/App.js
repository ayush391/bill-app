import React from 'react'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

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

    </>
  )
}

export default App