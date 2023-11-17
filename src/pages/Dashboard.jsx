import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import GraphicsContainer from '../components/GraphicsContainer'

const Dashboard = () => {
  return (
    <div className='page-wrapper'>
    <Sidebar/>
    <div className='main-header-wrapper'>
    <Header/>
    <GraphicsContainer/>
    
    </div>
    

    </div>
  )
}

export default Dashboard