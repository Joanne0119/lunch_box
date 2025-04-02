import React from 'react'
import Card from './Card'

const Order = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">訂單列表</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    
  )
}

export default Order
