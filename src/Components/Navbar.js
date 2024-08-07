import React from 'react'
import Navcss from './Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <h1 id={Navcss.heading}><p id={Navcss.head1}>PDF</p> <p id={Navcss.head2}> Tools</p></h1>
        <div id={Navcss.Nav}>
            <ul id={Navcss.Navin}>
                <Link to='/' ><li>Home</li></Link>
                <Link to='/Merge' ><li>Merger</li></Link>
                <Link to='/Crop' ><li>Croper</li></Link>
                <Link to='/Filter' ><li>Filter</li></Link>
                <Link to='/Compress' ><li>Compresser</li></Link>
                <li>More Tools</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar