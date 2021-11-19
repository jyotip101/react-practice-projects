import React, { useState } from 'react'

import '../useState-Array-Example/useState.css';

function useStateCounter() {
    const [count, setCount] = useState(0);
    
    const reset = () => {
        setCount(0);
    }

    const cunterHander = () => {
        setTimeout(() =>{
            setCount(prevCount => {
                return prevCount + 1;
            });
        }, 2000);
    }
    return ( 
    <>
        <div style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className="item">

            <h1  >Regluer Counter</h1>
            <h1 style={{marginTop: '1.5rem'}} >{count}</h1>
        </div>
        <div 
            style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button 
                onClick={() => reset()} 
                style={{fontSize: '100%', margin: '0.5rem'}} 
                className='btn'
                >reset
            </button>
            <button 
                onClick={() => setCount(count + 1)} 
                style={{fontSize: '100%', margin: '0.5rem'}} 
                className='btn'
                >increase
            </button>
            <button 
                onClick={() => setCount( count - 1)} 
                style={{fontSize: '100%', margin: '0.5rem'}} 
                className='btn'
                >decrease
            </button>
        </div>

        <div style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} className="item">

            <h1>Counter useing  setTimeout()</h1>
            <h1 style={{marginTop: '1.5rem'}} >{count}</h1>
        </div>
        <div  style={{ margin: '1rem auto'}}> 
            <button 
                onClick={() => cunterHander()} 
                style={{fontSize: '100%'}} 
                className='btn'
                >counter
            </button> 
        </div>
    </>
    )
}

export default useStateCounter
