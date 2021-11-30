import React, { useRef } from 'react'
import { useEffect } from 'react'

const useRefBasic = () => {
  const refValue = useRef(null)
  const butValue = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refValue.current.value)
    console.log(butValue.current)
  }

  useEffect(() => {
    console.log(refValue.current)
    refValue.current.focus()
  })

  return (
    <>
      <h1>useRef Basic</h1>
      <div className='items'>
        <form onSubmit={handleSubmit}>
          <div className='input-item'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              ref={refValue}
              placeholder='Enter you name...'
              name='name'
            />
          </div>
          <button
            ref={butValue}
            style={{ backgroundColor: 'blueviolet' }}
            className='btn'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default useRefBasic
