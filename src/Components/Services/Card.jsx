import React from 'react'
import './Card.css'

export const Card = ({service}) => {
    

  return (
       <>
       <div className="card-container">
        <div className="icon-container">
            {service.icon}
        </div>
        <div className="card-txt">
            <div className="title-txt">
             {service.title}
            </div>
            <div className="desc-txt">
             {service.description}
            </div>
        </div>
        </div></>
  )
}
