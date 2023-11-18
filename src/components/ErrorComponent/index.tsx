import React from 'react'

function ErrorComponent() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <p className='font-semibold text-lg text-black'>
        There was an error in the call to the server, please check your internet connection and reload the page. and if the error persists, try again later.
        </p>
    </div>
  )
}

export default ErrorComponent