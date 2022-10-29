import React, { useState } from 'react'
import Add from './Add'
import Chart from './Chart'
import View from './View'
import { useSelector } from 'react-redux'
const Home = () => {
  const UserData = useSelector((state) => {
    return state.billReducers.bills
  });

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => new Date(data.date).toLocaleString("default", { month: "long" })),
    datasets: [{
      label: "Bill Amount",
      data: UserData.map((data) => data.amount),
      backgroundColor:["red"]
    }],
  })
  return (
    <div className='container'>
      <div className='row'>
        <Chart data={userData}></Chart>
        <Add></Add>
        <View></View>
      </div>
    </div>
  )
}

export default Home