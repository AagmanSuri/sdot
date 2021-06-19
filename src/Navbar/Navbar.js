import React from 'react'
import './Navbar.css';
import logo from  './logo.png'
function Navbar() {
    return (
        <div>
           <img  alt='sdot' src={logo}></img>
           <ul>
               <li><a href="link.com"> Home    </a></li>
               <li><a href="link.com"> About   </a></li>
               <li><a href="link.com"> Services</a></li>
               <li><a href="link.com"> Page    </a></li>
               <li><a href="link.com"> Cases   </a></li>
               <li><a href="link.com"> Blog    </a></li>
           </ul>
        </div>
    )
}

export default Navbar
