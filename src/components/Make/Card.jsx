import React from 'react'

const Card = ({ item, isSelected, onSelect }) => {
  return (
    <div 
      className={`card bg-base-200 m-4 shadow-sm cursor-pointer transition-all duration-300 ${isSelected ? "border-4 border-base-primary" : ""}`}
      onClick={onSelect}
    >
      <figure className='p-2'>
        <img className="p-4 rounded-lg bg-base-100 inset-shadow-sm" src={item.image} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.calories} kcal</p>
      </div>
    </div>
  )
}

export default Card;
