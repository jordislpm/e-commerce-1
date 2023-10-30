import React from 'react'


interface LayaoutProps{
    children?: React.ReactNode
}

function Layout({children}: LayaoutProps) {
  return (
    <div className='flex flex-col items-center mt-20'>
        {children}
    </div>
  )
}

export default Layout