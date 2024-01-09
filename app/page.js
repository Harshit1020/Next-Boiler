"use client"
import React, { useState } from 'react'

const page = () => {
  // plan js

 const[time, settime] =useState(new Date().toLocaleTimeString());
 setInterval(()=>{
      
  settime(new Date().toLocaleTimeString());

 },1000)

  return (
   
    <div className='content'>
      <h5 className='text-sm'>Live Timer</h5>
      <h6>{time}</h6>
    </div>
  )
}

export default page