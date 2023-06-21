import React from 'react'

const Zeitstrahl = () => {
  return (
    <div id='Zeitstrahl' className=' min-h-screen p-14 flex'>
      <div className=" shadow-xl p-10 h-auto w-full rounded-3xl bg-blue-50 ">
      <h1 className=' text-center text-5xl font-bold text-blue-400'>Zeitstrahl</h1>
        <div id='Timeline' className='flex flex-row gap-1 pt-5 justify-center'>
          <div className='flex flex-col mt-16'>
          <div id='1' className=' bg-white shadow-md shadow-blue-400 rounded-3xl h-28 w-80 mb-44 p-2'>
          <h1 className=' text-2xl font-bold' >2012</h1>
            <p className=' text-lg font-medium text-gray-800'>Primarschule,</p>
            <p className=' text-lg font-medium text-gray-800'>Hermetschwil-Staffeln</p>
          </div>
          <div id='3' className='bg-white shadow-md shadow-blue-400 rounded-3xl h-28 w-80 p-3'>
          <h1 className='text-2xl font-bold' >2018</h1>
            <p className=' text-lg font-medium text-gray-800'>Bezirkschule,</p>
            <p className=' text-lg font-medium text-gray-800'>Seengen</p>
          </div>
          </div>
          <div className='bg-black w-2 rounded-lg'>
          </div>
          <div id='2' className='flex flex-col mt-16'>
            <div className='bg-white shadow-md shadow-blue-400 rounded-3xl h-28 w-80 mt-36 p-3'>
            <h1 className='text-2xl font-bold' >2016</h1>
            <p className=' text-lg font-medium text-gray-800'>Primarschule,</p>
            <p className=' text-lg font-medium text-gray-800'>Hallwil</p>
            </div>
            <div id='4' className='bg-white shadow-md shadow-blue-400 rounded-3xl h-28 w-80 mt-44 p-3'>
            <h1 className='text-2xl font-bold' >2021</h1>
            <p className=' text-lg font-medium text-gray-800'>Informatikmittelschule,</p>
            <p className=' text-lg font-medium text-gray-800'>Altekanti Aarau und BBBaden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zeitstrahl