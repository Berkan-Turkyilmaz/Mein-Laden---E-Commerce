import React from 'react'
import { Link } from 'react-router-dom'

function NavbarBottom() {
  return (
    <div className='flex-col justify-center pt-2 pr-6 bg-gray-100 pb-2'>
        <div className='font-bold justify-center flex'><span>ORDER RIGHT NOW!</span></div>
        <div className='justify-center flex gap-1'><span>Don't miss the perfect offers till the end of the day!</span><Link className='font-bold underline ' to="/start" >See the offers!</Link></div>
    </div>
  )
}

export default NavbarBottom
