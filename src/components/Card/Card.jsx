import React from 'react'
import "./Card.css"

const Card = ({url, title, desciption}) => {
  return (
    <div className='container'>
        <div className='imagen'>
            <img src={url}/>
        </div>
        <div>
            <h2 className='title'>{title}</h2>
            <p className='description'>{desciption}</p>
        </div>
    </div>
  )
}

export default Card