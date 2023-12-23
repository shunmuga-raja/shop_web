import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <main className='pt-16'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
