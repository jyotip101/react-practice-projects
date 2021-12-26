import React, { useState } from 'react'
import data from './Data'
import './Sidebar.css'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <>
      <div className={isSidebarOpen ? 'nav-center' : 'hide-nav'}>
        <div className='nav-header'>
          <button className='close-button' onClick={closeSidebar}>
            <i className='material-icons'>close </i>
          </button>
        </div>
        <div className='links-container'>
          <ul className='links-items'>
            {data.map((item) => {
              const { id, text } = item
              return (
                <li key={id} onClick={closeSidebar}>
                  <a href='#'>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
