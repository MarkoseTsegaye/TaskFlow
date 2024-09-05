import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] bg-white relative'>
        <div className='flex flex-row h-full items-center'>
            <h1 className='text-4xl pl-16 font-Poppins' >TaskFlow</h1>
            <h2 className='ml-auto pr-16 text-xl font-Poppins'>Logout</h2>
            
        </div>
    </div>
  )
}

export default Navbar