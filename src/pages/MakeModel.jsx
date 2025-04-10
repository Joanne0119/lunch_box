import React, { useState } from 'react'
import { useLocation } from 'react-router';
import Spline from '@splinetool/react-spline';
import { orderHints } from '../constants';

const MakeModel = () => {
    const location = useLocation();
    const { selectedIngredients } = location.state || {};
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='h-screen flex flex-col justify-start items-start pt-20 relative'>
            <h1 className='text-3xl font-bold mb-4 pl-10 pt-4'>你的便當</h1>
            <div className='absolute top-25 right-0 mx-auto px-4'>
                <div
                    tabIndex={0}
                    className={`cursor-pointer collapse collapse-arrow bg-base-200 rounded-box ${isOpen ? "collapse-open" : "collapse-close"} w-80 md:w-96 shadow-lg`}
                    onClick={() => setIsOpen(prev => !prev)}
                    >
                    <h2 className='text-xl font-semibold collapse-title'>你的的訂單明細:</h2>
                    <div className='collapse-content text-sm  px-10'>
                        {Object.keys(selectedIngredients)
                            .sort((a, b) => Number(a.replace("step", "")) - Number(b.replace("step", "")))
                            .map((step) => (
                                selectedIngredients[step].length > 0 && (
                                    <li key={step} className='list-none pb-2'>
                                    <p className='font-semibold'> { orderHints[step.slice(-1) - 1].slice(4)}</p>
                                    <ul key={step} className="px-2">
                                    {selectedIngredients[step].map((item) => (
                                        <li className='text-base-content/80' key={item.id}>{item.name}</li>
                                    ))}
                                    </ul>
                                    </li>
                                )
                            ))}
                    </div>
                    
                </div>
                
            </div>
            <Spline scene="https://prod.spline.design/nzyOcxgRIO9CS7dl/scene.splinecode" />
        </div>
    )
}

export default MakeModel
