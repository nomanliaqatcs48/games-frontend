import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import '../../src/styles/common/globalStyles.module.scss'

export default function Layout({children}) {
  
  return (
    <div className='layout'>
        <Header/>
        {/* <Navbar/>  not functioned*/}
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
