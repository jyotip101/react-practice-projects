import React from 'react'
import data from './Data'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <>
      <div className='nav-center'>
        <div className='nav-header'>
          <button
            className='close-button'
            // onClick={closeSidebar}
          >
            <i className='material-icons'>close </i>
          </button>
        </div>
        <div className='links-container'>
          <ul className='links-items'>
            {data.map((item) => {
              const { id, text } = item
              return (
                <li key={id}>
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
