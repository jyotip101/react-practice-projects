import React, { useState } from 'react';

import './Projects.css'   

// Card Example 
import Card from './Card/Book';
  
// useState-Array Example
import UseStateArray from './useState-Array-Example/UseState';

// useState-Array Example
import UseStateObject from './useState-Object-Example/UseState';

// useState-Counter Example
import UseStateCounter from './useState-Counter-Example/useStateCounter';

// BirthdaysReminder
import BirthdaysReminder from './Birthdays Reminder/BirthdaysReminder';

// UseEffect Basic
import UseEffectBasic from './UseEffect-Basic/UseEffectBasic';

const Projects = () => {
    const [project, setProject] = useState();

    const card = <Card />
    const projectHandler = (e) => {
        console.log("click");
        setProject(card);
    }
    return ( 
    <>
        <div className="projects"> 
            <div className="items">
                <h1>Projects</h1> 
            </div>
            <div className="items"> 
                <button 
                    className='btn'
                    onClick={() => projectHandler()}
                    >Card
                </button>
                <button 
                    className='btn'
                    onClick={() => setProject(<UseStateArray/>)}
                    >UseState Array
                </button>
                <button 
                    className='btn'
                    onClick={() => setProject(<UseStateObject/>)}
                    >UseState Object
                </button>
                <button 
                    className='btn'
                    onClick={() => setProject(<UseStateCounter />)}
                    >UseState Counter
                </button>
                <button 
                    className='btn'
                    onClick={() => setProject(<BirthdaysReminder />)}
                    >Birthdays Reminder
                </button>
                <button 
                    className='btn'
                    onClick={() => setProject(<UseEffectBasic />)}
                    >UseEffect Basic
                </button>
            </div>
             
            <div style={{margin: '0.5rem auto', textAlign: 'center'}}> 
                {project} 
            </div>

        </div>
    </>
    );
}

export default Projects;
