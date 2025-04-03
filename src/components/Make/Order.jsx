import React from 'react'
import Card from './Card'

const Order = ({ ingredients, selectedIngredients, step, onSelect }) => {
    const selected = selectedIngredients[`step${step}`] || [];
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {ingredients.map((item) => (
          <Card
          key={item.id}
          item={item}
          isSelected={selected.some((i) => i.id === item.id)}
          onSelect={() => onSelect(item)}
        />
        ))}
      </div>
    )
  }

export default Order;
