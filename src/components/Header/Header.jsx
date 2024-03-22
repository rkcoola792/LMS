import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header h-full sticky  shadow-xl  flex flex-col gap-8 p-8 '>
      <div className='general flex flex-col gap-4'>
        <Link to="/"><p className='text-xl semibold'>Home </p></Link>
        <Link to="/About"><p className='text-xl semibold'>About </p></Link>
        <Link to="/Courses"><p className='text-xl semibold'>Courses</p></Link>
        <Link to="/Members"><p className='text-xl semibold'>Members</p></Link>
      </div>
      <div className='courses'></div>
    </div>
  )
}

export default Header
