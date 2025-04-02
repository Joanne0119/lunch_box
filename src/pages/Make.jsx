import React, { useState } from 'react'
import Step from '../components/Make/Step'
import Order from '../components/Make/Order'
import OrderDetails from '../components/Make/OrderDetails'

const Make = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='pt-20 flex flex-col'>
      <Step />
          <div className="flex flex-col md:flex-row transition-all duration-500">

          <div className={`transition-all duration-500 md:w-3/4 ${isOpen ? "w-3/4" : "w-full"}`}>
            <Order />
          </div>
          <OrderDetails className="fixed bottom-5" isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      <div className='mb-10 flex justify-around max-w-3/4 w-full mx-auto mt-6 px-4 items-start md:ml-2'>
        <button className='btn btn-primary'>上一步</button>
        <button className='btn btn-primary'>下一步</button>
      </div>
    </div>
  )
}

export default Make
