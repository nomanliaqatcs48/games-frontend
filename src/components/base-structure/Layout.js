import React from 'react'
import Navbar from './Navbar'
import '../../styles/global.css'
// import Navbar from '../Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        {/* <Navbar/>  not functioned*/}
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
