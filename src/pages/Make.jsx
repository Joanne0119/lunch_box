import React, { useState, useRef, useEffect } from 'react'
import Step from '../components/Make/Step'
import Order from '../components/Make/Order'
import OrderDetails from '../components/Make/OrderDetails'
import ConfirmOrder from '../components/Make/ConfirmOrder'
import { ingredients, orderHints, ingredientToName } from '../constants'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../firebase/firebase'
import { setStepIngredients, toggleIngredient } from '../redux/orderSlice'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { addOrderToUser } from '../redux/userSlice'

const Make = () => {
  const navigate = useNavigate();
  const topRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(1); // 目前的步驟
  const dispatch = useDispatch()
  const selectedIngredients = useSelector(state => state.order.selectedIngredients)
  const user = useSelector(state => state.user.user) || null;
    
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // 取得當前步驟的食材
  const currentStepIngredients = ingredients[`step${step}`] || [];

  // 設定選擇的食材
  const handleSelectIngredient = (ingredient) => {
    dispatch(toggleIngredient({
      step: `step${step}`,
      ingredient
    }))
  };

  const [bentoName, setBentoName] = useState('');
  
  useEffect(() => {
  if (selectedIngredients) {
      const name = getBentoName(selectedIngredients);
      setBentoName(name);
  }
  }, [selectedIngredients]);

  function getBentoName(selectedIngredients) {
      const step2 = selectedIngredients.step2 || [];
      for (const item of step2) {
          const names = ingredientToName[item.splineName];
          if (names) {
          const randomIndex = Math.floor(Math.random() * names.length);
          return names[randomIndex];
          }
      }
      return "就是好吃的便當";
  }

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
    navigate('/makeresult', { state: { selectedIngredients, bentoName } });
  }

  const handleClick = async () => {
    if (step === 5) {
      if (user && user.uid) {
        await saveOrderToFirebase()
      }
      goto3DModelPage();
    } else {
      handleNextStep();
    }
  }

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const isDisabled = (step) => {  
    const data = selectedIngredients[`step${step}`]
    if (step === 1 || step === 2) return !data.length
    if (step === 3) return data.length < 4
    return false
  };

  const today = new Date().toISOString(); 

  const saveOrderToFirebase = async () => {
  if (!user || !user.uid) return

  const userRef = doc(db, "users", user.uid)

  const newOrder = {
    ingredients: selectedIngredients,
    createdAt: today,
    name: bentoName 
  }

  try {
    await updateDoc(userRef, {
      orderlist: arrayUnion(newOrder)
    })

    // 同步 Redux user 狀態
    dispatch(addOrderToUser(newOrder))
    console.log("Order saved to Firebase and Redux")
  } catch (error) {
    console.error("Error saving order: ", error)
  }
}

  return (
    <div ref={topRef} className='pt-25 flex flex-col min-h-screen p-8'>
      <Step step={step}/>
          <div className="flex flex-col md:flex-row transition-all duration-500">

          <div className={`transition-all duration-500 md:w-3/4 ${isOpen ? "w-3/4" : "w-full"}`}>
            {isOrderConfirmed ?
             <ConfirmOrder /> 
             :
             <div>
                <h1 className="text-2xl font-bold pt-6 pl-10">選擇你的食材</h1>
                <h2 className="text-xl font-bold pt-4 pl-10">{orderHints[step - 1]}</h2>
                <Order 
                  ingredients={currentStepIngredients} 
                  step={step}
                  onSelect={handleSelectIngredient}
                />
              </div>
          }
            
          </div>
          <OrderDetails className="fixed bottom-5" isOpen={isOpen} setIsOpen={setIsOpen}/>
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
