import React from 'react'
import { orderHints } from '../../constants'
import { useSelector } from 'react-redux'

const ConfirmOrder = () => {
  const selectedIngredients = useSelector(state => state.order.selectedIngredients)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">訂單確認</h1>
      <div className="mt-4">
        {Object.keys(selectedIngredients)
          .sort((a, b) => Number(a.replace("step", "")) - Number(b.replace("step", "")))
          .map((step) => (
            selectedIngredients[step].length > 0 && (
              <div key={step} className="mt-2 p-4 border border-primary rounded-lg">
                <h2 className="text-lg font-semibold mb-2">{orderHints[step.slice(-1) - 1].slice(4)}</h2>
                <ul>
                  {selectedIngredients[step].map((item) => (
                    <li className='leading-5 md:leading-6' key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
      </div>
    </div>
  )
}

export default ConfirmOrder
