import React from 'react'
import Chart from '../pages/chart'
import Saving from "../pages/saving"
import Status from '../pages/status'

function page() {
  return (
    <div className="">
      <div className='p-6'>
        <h1 className="text-2xl font-bold ml-70">Transactions</h1>
        <Status />
        <Chart />
        <Saving />

      </div>  
    </div>
  )
}

export default page
