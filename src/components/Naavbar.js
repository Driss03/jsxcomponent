import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';


function Naavbar() {
  return (
     <div className='navigationBar'>
      <div className='logo'><h1><strong>Sportwear</strong></h1></div>  
      <div className='items'>
        <ul>
          <li><a href=''>Home</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Contacts</a></li> 
          <li><a href=''>products</a></li> 
          <li><a href=''>Login</a></li>
          <li><a href=''>Sign up</a></li>               
        </ul>
      </div>
    </div>
  )
}

export default Naavbar