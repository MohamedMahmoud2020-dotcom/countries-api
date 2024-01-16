import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='flex justify-between px-12 py-4' style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}>
      <h1 className='font-bold text-2xl'>Where in the world?</h1>
      <button className='p-2 border-none font-bold text-sm' onClick={props.click}>Dark Mode</button>
    </nav>
  )
}

export default Navbar