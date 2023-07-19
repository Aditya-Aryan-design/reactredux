import React from 'react'
import Widrow from './Navcomponents/Widrow'
import Amount from './Navcomponents/Amount'

export default function Navbar() {
  return (
    <div className='w-screen flex justify-between px-4 py-2'>
      <Widrow />
      <Amount />
    </div>
  )
}
