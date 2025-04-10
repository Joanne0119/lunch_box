import React, { useState, useRef, useEffect } from 'react'
import Step from '../components/Make/Step'
import Order from '../components/Make/Order'
import OrderDetails from '../components/Make/OrderDetails'
import ConfirmOrder from '../components/Make/ConfirmOrder'
import { ingredients, orderHints } from '../constants'
import { useNavigate } from 'react-router'

const Make = () => {
  const navigate = useNavigate();
  const topRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(1); // 目前的步驟
  const [selectedIngredients, setSelectedIngredients] = useState(
    {
      step1: [],   
      step2: [], 
      step3: [],     
      step4: []
    }); // 選擇的食材
    
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // 取得當前步驟的食材
  const currentStepIngredients = ingredients[`step${step}`] || [];

  // 設定選擇的食材
  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients((prev) => {
      const newSelection = { ...prev };

      if (!newSelection.step3) newSelection.step3 = [];
      if (!newSelection.step4) newSelection.step4 = [];

      if (step === 1 || step === 2) {
        newSelection[`step${step}`] = [ingredient]; // 只能選一個
      } else if (step === 3) {
        if (newSelection.step3.some((item) => item.id === ingredient.id)) {
          newSelection.step3 = newSelection.step3.filter((item) => item.id !== ingredient.id);
        } else if (newSelection.step3.length < 4) {
          newSelection.step3 = [...newSelection.step3, ingredient];
        }
      } else if (step === 4) {
        if (newSelection.step4.some((item) => item.id === ingredient.id)) {
          newSelection.step4 = newSelection.step4.filter((item) => item.id !== ingredient.id);
        } else {
          newSelection.step4 = [...newSelection.step4, ingredient];
        }
      }

      return newSelection;
    });
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      setStep((prev) => prev + 1);
      setIsOrderConfirmed(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      setIsOrderConfirmed(false);
    }
  };

  const goto3DModelPage = () => {
    navigate('/makeresult', { state: { selectedIngredients } });
  }

  const handleClick = () => {
    if (step === 5) {
      goto3DModelPage();
    } else {
      handleNextStep();
    }
  }

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const isDisabled = (step) => {  
    if (step === 1) {
      return !selectedIngredients.step1.length;
    } else if (step === 2) {
      return !selectedIngredients.step2.length;
    } else if (step === 3) {
      return !(selectedIngredients.step3.length > 3);
    } else if (step === 4) {
      return false;
    }
  };

  return (
    <div ref={topRef} className='pt-25 flex flex-col min-h-screen p-8'>
      <Step step={step}/>
          <div className="flex flex-col md:flex-row transition-all duration-500">

          <div className={`transition-all duration-500 md:w-3/4 ${isOpen ? "w-3/4" : "w-full"}`}>
            {isOrderConfirmed ?
             <ConfirmOrder selectedIngredients={selectedIngredients}/> 
             :
             <div>
                <h1 className="text-2xl font-bold pt-6 pl-10">選擇你的食材</h1>
                <h2 className="text-xl font-bold pt-4 pl-10">{orderHints[step - 1]}</h2>
                <Order 
                  ingredients={currentStepIngredients} 
                  selectedIngredients={selectedIngredients}
                  step={step}
                  onSelect={handleSelectIngredient}
                />
              </div>
          }
            
          </div>
          <OrderDetails className="fixed bottom-5" isOpen={isOpen} setIsOpen={setIsOpen} selectedIngredients={selectedIngredients}/>
        </div>
      <div className='mb-10 flex justify-around max-w-3/4 w-full mx-auto mt-6 px-4 items-start md:ml-2'>
      <button className='btn btn-primary' onClick={handlePrevStep} disabled={step === 1}>上一步</button>
        <button className={step === 5  ? 'btn btn-success' : 'btn btn-primary'} onClick={handleClick} disabled={isDisabled(step)}>
          {step === 5 ? "確認訂單" : "下一步"}
        </button>
      </div>
    </div>
  )
}

export default Make
