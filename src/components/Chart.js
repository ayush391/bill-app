import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const Chart = (props) => {
  return (
    <div>
        {/* <h3>Monthly Billing</h3> */}
        <Line data={props.data}></Line>
    </div>
  )
}

export default Chart