import React from 'react';
  
import './card.css';
import { data } from './BookData';
 
const Books = () => {
  return (
    <>
      {
        data.map(book => {
          
          const {img, title, author} = book;

          return(
            <article className='books'>
              <img src={img} alt={title} />
              <h1>{title}</h1>
              <h4>{author}</h4> 
          </article>
          );
          
        })
      }
    </>
  )
}

export default Books;