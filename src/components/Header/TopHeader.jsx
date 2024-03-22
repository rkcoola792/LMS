import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const TopHeader = () => {
  return (
    <div className='Top-Header flex justify-between p-4'>
    <div className='left'><h1>LMS</h1></div>
    <div className='right flex  gap-4 '>
    <div className='input'>
        <input type="text" placeholder='Enter you text' className='border border-black px-2' />
    </div>
    <p>Account</p>
<div className='cart'>
    <ShoppingCartIcon></ShoppingCartIcon>
</div>
    </div>
    </div>
  )
}

export default TopHeader
