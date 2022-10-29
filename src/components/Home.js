import React, { useState } from 'react'
import Add from './Add'
import Chart from './Chart'
import View from './View'
import { useSelector } from 'react-redux'
const Home = () => {
  const UserData = useSelector((state) => {
    let chartLabels = {
      "January": 0,
      "Febuary": 0,
      "March": 0,
      "April": 0,
      "May": 0,
      "June": 0,
      "July": 0,
      "August": 0,
      "September": 0,
      "October": 0,
      "Novemeber": 0,
      "Decemeber": 0,
    }
    const allBills = state.billReducers.bills

    allBills.map((data) => {
      let month = new Date(data.date).toLocaleString("default", { month: "long" });
      return chartLabels[month] += data.amount;
    })

      
    return {
      labels: Object.keys(chartLabels),
      datasets: [{
        label: "Bill Amount",
        data:Object.values(chartLabels),
        backgroundColor: ["red"]
      }],
    }
  });

  const [userData, setUserData] = useState(UserData)
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