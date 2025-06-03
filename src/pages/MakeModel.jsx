import React, { useState, Suspense, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
// import Spline from '@splinetool/react-spline';
import { orderHints, ingredientToName } from '../constants';
import { useDispatch } from 'react-redux';
import { resetOrder } from '../redux/orderSlice';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const MakeModel = () => {
    const location = useLocation();
    const { selectedIngredients, bentoName } = location.state || {};
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(selectedIngredients);

    // const [bentoName, setBentoName] = useState('');

    // useEffect(() => {
    // if (selectedIngredients) {
    //     const name = getBentoName(selectedIngredients);
    //     setBentoName(name);
    // }
    // }, [selectedIngredients]);

    // function getBentoName(selectedIngredients) {
    //     const step2 = selectedIngredients.step2 || [];
    //     for (const item of step2) {
    //         const names = ingredientToName[item.splineName];
    //         if (names) {
    //         const randomIndex = Math.floor(Math.random() * names.length);
    //         return names[randomIndex];
    //         }
    //     }
    //     return "就是好吃的便當";
    // }

    function onSplineLoad(spline) {
        spline.findObjectByName('Veg1') ? (spline.findObjectByName('Veg1').visible = false ): undefined;
        spline.findObjectByName('Veg2') ? (spline.findObjectByName('Veg2').visible = false) : undefined;
        spline.findObjectByName('Veg3') ? (spline.findObjectByName('Veg3').visible = false ): undefined;
        spline.findObjectByName('beans') ? (spline.findObjectByName('beans').visible = false) : undefined;
        spline.findObjectByName('Brocoli') ? (spline.findObjectByName('Brocoli').visible = false) : undefined;
        spline.findObjectByName('carrot') ? (spline.findObjectByName('carrot').visible = false) : undefined;
        spline.findObjectByName('tamato') ? (spline.findObjectByName('tamato').visible = false) : undefined;
        spline.findObjectByName('cucumber') ? (spline.findObjectByName('cucumber').visible = false) : undefined;
        spline.findObjectByName('eggplant') ? (spline.findObjectByName('eggplant').visible = false) : undefined;
        spline.findObjectByName('okra') ? (spline.findObjectByName('okra').visible = false) : undefined;
        spline.findObjectByName('pumkin') ? (spline.findObjectByName('pumkin').visible = false) : undefined;
        spline.findObjectByName('drytofu') ? (spline.findObjectByName('drytofu').visible = false) : undefined;
        spline.findObjectByName('tofu') ? (spline.findObjectByName('tofu').visible = false) : undefined;
        spline.findObjectByName('tofuSide') ? (spline.findObjectByName('tofuSide').visible = false) : undefined;
        spline.findObjectByName('chicken') ? (spline.findObjectByName('chicken').visible = false) : undefined;
        spline.findObjectByName('steak') ? (spline.findObjectByName('steak').visible = false) : undefined;
        spline.findObjectByName('simon') ? (spline.findObjectByName('simon').visible = false) : undefined;
        spline.findObjectByName('potato') ? (spline.findObjectByName('potato').visible = false) : undefined;
        spline.findObjectByName('noodles') ? (spline.findObjectByName('noodles').visible = false) : undefined;
        spline.findObjectByName('whiteRice') ? (spline.findObjectByName('whiteRice').visible = false) : undefined;
        spline.findObjectByName('purpleRice') ? (spline.findObjectByName('purpleRice').visible = false) : undefined;
        spline.findObjectByName('Egg') ? (spline.findObjectByName('Egg').visible = false) : undefined;
        spline.findObjectByName('Corn') ? (spline.findObjectByName('Corn').visible = false) : undefined;

        Object.entries(selectedIngredients).forEach(([step, ingredients]) => {
            let step3Count = 0;
            ingredients.forEach(ingredient => {
              const objName = ingredient.splineName;
              console.log("objName", objName);
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
                            target.position.set(-30.07, 1.31,112.53);
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
        <div className='h-screen flex flex-col justify-start items-start pt-20 relative transition-all duration-500 ease-in-out'>
            <div className='w-full flex flex-row justify-start items-center mt-5'>
                <h1 className='text-4xl font-bold mb-4 pl-10 pt-4'>{bentoName}</h1>
                <button
                className="btn btn-secondary text-white hover:brightness-80 mx-10"
                onClick={() => {
                    dispatch(resetOrder());
                    navigate('/make')
                }}
                >
                製作新便當
                </button>
            </div>
            <div className='w-full md:w-96 ml-10w-full md:w-96 absolute top-40 md:top-24 md:right-10 ml-10'>
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
            <Suspense fallback={<div className='h-screen w-full flex justify-center items-center font-bold text-3xl'>Loading...</div>}>
                <Spline scene="https://prod.spline.design/nzyOcxgRIO9CS7dl/scene.splinecode?v=3"
                    onLoad={onSplineLoad}  />
            </Suspense>
        </div>
    )
}

export default MakeModel
