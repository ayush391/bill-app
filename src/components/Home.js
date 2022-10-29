import React from 'react'
import Add from './Add'
import Chart from './Chart'
import View from './View'
const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        {/* <Chart></Chart> */}
        <Add></Add>
        <View></View>
      </div>
    </div>
  )
}

export default Home