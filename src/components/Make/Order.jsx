import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Order = ({ ingredients, step, onSelect }) => {
    const selectedIngredients = useSelector(state => state.order.selectedIngredients)
    const selected = selectedIngredients[`step${step}`] || [];
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
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
