import React, { useState } from 'react'
import { BiLogoInstagram } from "react-icons/bi";
import 'boxicons'
function Footer() {
 
  return (
      <footer className='foot'>
           <p>&copy; 2024 Balaji - Portfolio</p>
           <p>DEVELOPED BY<span style={{fontSize:'20px'}}> BOLE BALAJI </span></p>
           <p>YOU CAN CONNECT ME AT</p>
           <div className='social-media'>
               <div className='item'>
                <a href='https://github.com/balu133' target='_blank'>
                <box-icon type='logo' name='github'></box-icon>
                 </a>
               </div>
               <div className='item'>
               <box-icon type='logo' name='instagram'></box-icon>
               </div>
               <div className='item'>
               <box-icon type='logo' name='twitter'></box-icon>
              </div>
           </div>
      </footer>
  )
}

export default Footer
