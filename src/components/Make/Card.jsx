import React from 'react'

const Card = ({ item, isSelected, onSelect }) => {
  return (
    <div 
      className={`card bg-base-200 m-4 shadow-sm cursor-pointer ${isSelected ? "border-4 border-base-primary" : ""}`}
      onClick={onSelect}
    >
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default Card;
