import React, { useEffect, useState } from 'react'
import Add from './Add'
import Chart from './Chart'
import View from './View'
import { useSelector } from 'react-redux'
const Home = () => {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [{
      label: "Bill Amount",
      data: [],
      backgroundColor: ["red"]
    }],
  })
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
      "November": 0,
      "December": 0,
    }
    const allBills = state.billReducers.bills

    allBills.map((data) => {
      let month = new Date(data.date).toLocaleString("default", { month: "long" });
      return chartLabels[month] += data.amount;
    })

    // console.log(chartLabels);
    return ({
      labels: Object.keys(chartLabels),
      datasets: [{
        label: "Bill Amount",
        data: Object.values(chartLabels),
        backgroundColor: ["red"]
      }],
    })
  });
  const bills = useSelector((state) => {
    return state.billReducers.bills
  });


  // const chartRef = useRef(null);

  const updateChart = useEffect(() => setUserData(UserData), [bills])

  return (
    <div className='container'>
      <div className='row m-auto'>

        <div className='col-lg-8 mt-3 mb-3'>
          <Chart data={userData}></Chart>
        </div>

        <div className='col-lg-4 mt-3 mb-3 panel'>
          <Add></Add>
        </div>
      </div>
      <div className='panel mt-5'>

        <View></View>
      </div>
    </div>
  )
}

export default Home