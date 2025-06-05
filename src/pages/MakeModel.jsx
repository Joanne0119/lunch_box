import React, { useState, Suspense, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
// import Spline from '@splinetool/react-spline';
import { orderHints } from '../constants';
import { useDispatch, useSelector  } from 'react-redux';
import { resetOrder } from '../redux/orderSlice';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const MakeModel = () => {
    const location = useLocation();
    // const { selectedIngredients, bentoName } = location.state || {};
    const selectedIngredients = useSelector(state => state.order.selectedIngredients);
    const totalKcal = useSelector(state => state.order.totalKcal);
    const totalPrice = useSelector(state => state.order.totalPrice);
    const bentoName = useSelector(state => state.order.bentoName);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(selectedIngredients);


   function onSplineLoad(spline) {
        const allObjectNames = [
            'Veg1', 'Veg2', 'Veg3', 'beans', 'Brocoli', 'carrot', 'tamato',
            'cucumber', 'eggplant', 'okra', 'pumkin', 'drytofu', 'tofu',
            'tofuSide', 'chicken', 'steak', 'simon', 'potato', 'noodles',
            'whiteRice', 'purpleRice', 'Egg', 'Corn'
        ];
        allObjectNames.forEach(name => {
            const obj = spline.findObjectByName(name);
            if (obj) obj.visible = false;
        });

        Object.entries(selectedIngredients).forEach(([step, ingredients]) => {
            let step3Count = 0;
            ingredients.forEach(ingredient => {
                const objName = ingredient.splineName;
                const target = spline.findObjectByName(objName);
                if (target) {
                    target.visible = true;
                    if (step === "step3") {
                        step3Count++;
                        switch (step3Count) {
                            case 1:
                                target.position.set(-30.07, 1.31, 55.26);
                                break;
                            case 2:
                                target.position.set(50.73, 1.31, 55.26);
                                break;
                            case 3:
                                target.position.set(40.73, 1.31, 120.00);
                                break;
                            case 4:
                                target.position.set(-30.07, 1.31, 112.53);
                                break;
                            default:
                                break;
                        }
                    }
                } else {
                    console.warn("找不到對應的 Spline 物件:", objName);
                }
            });
        });
    }
    
    return (
        <div className='h-screen flex flex-col justify-start items-start pt-20 relative'>
            <div className='w-full flex flex-row justify-start items-center mt-5'>
                <h1 className='text-3xl font-bold mb-4 pl-10 pt-4 md:text-4xl'>{bentoName}</h1>
                <button
                className="btn btn-primary mx-10 my-2 mb-4 "
                onClick={() => {
                    dispatch(resetOrder());
                    navigate('/make')
                }}
                >
                製作新便當
                </button>
            </div>
            <div className='w-full md:w-96 ml-10w-full md:w-96 absolute top-46 md:top-24 md:right-10 ml-10'>
                <div
                    tabIndex={0}
                    className={`cursor-pointer collapse collapse-arrow bg-base-200 rounded-box ${isOpen ? "collapse-open" : "collapse-close"} w-80 md:w-96 shadow-lg`}
                    onClick={() => setIsOpen(prev => !prev)}
                    >
                    <h2 className='text-xl font-semibold collapse-title'>你的的訂單明細:</h2>
                    <div className='collapse-content text-sm  px-10'>
                        <h3 className='text-lg font-semibold pb-2'>總熱量: {totalKcal} kcal</h3>
                        {
                        Object.values(selectedIngredients).every(arr => arr.length === 0) ? (
                            <p className="text-primary/60">您的便當空空如也</p>
                        ) : (
                        Object.keys(selectedIngredients)
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
                            ))
                        )}
                    </div>
                    
                </div>
                
            </div>
            <Suspense fallback={<div className='h-screen w-full flex justify-center items-center font-bold text-3xl'>Loading...</div>}>
                <Spline scene="https://prod.spline.design/nzyOcxgRIO9CS7dl/scene.splinecode?v=3"
                    onLoad={onSplineLoad}  />
            </Suspense>
        </div>
    )
}

export default MakeModel
