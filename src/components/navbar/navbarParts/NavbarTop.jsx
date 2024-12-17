import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavbarTop () {
  const navigate = useNavigate()

  return (
    <div className='flex justify-end pt-2 pr-6 bg-gray-100 pb-2'>
    <div className='flex gap-4'> 
      <div> <Link >Hilfe</Link></div>
      <div><span>I</span></div>
      <div> <Link >Store Suchen</Link></div>
      <div><span>I</span></div>
      <div> <Link >Sign In</Link></div>
      </div>

    </div>
  )
}

export default NavbarTop
