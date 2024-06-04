import React from 'react'
import './Searchbar.css'
import { IoSearch } from "react-icons/io5";
const Searchbar = () => {
  return (
    <>
    <div className="search-bar">
        <input type="text" placeholder='Search' name='name'/>
        <a href="#">
            <i ><IoSearch className='search-icon'/></i>
        </a>
    </div>
    </>
  )
}

export default Searchbar