import React from 'react'
import { auth } from '../config/firebase'
import Card from './Card'

const HomePage = () => {
  return (
    <div className='p-7 h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white flex flex-col '>
        <h1 className='text-2xl font-semibold mb-10'>Welcome {auth?.currentUser?.displayName}</h1>
        <div className='flex space-x-5 overflow-auto hide-scrollbar'>
          <Card/>
        </div>
    </div>
  )
}

export default HomePage
