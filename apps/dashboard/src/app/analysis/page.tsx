import React from 'react'
import Chart from '../pages/chart'
import Saving from "../pages/saving"
import Status from '../pages/status'

function page() {
  return (
    <div className="w-screen ">
      <div className='p-6'>
        <Status />
        <Chart />
        <Saving />

      </div>  
    </div>
  )
}

export default page
