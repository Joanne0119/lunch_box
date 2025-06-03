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
import { toast } from 'react-hot-toast';

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

  // Toast ID 
  const toastIdRef = useRef(null);

  // 設定選擇的食材
  const handleSelectIngredient = (ingredient) => {
    const stepKey = `step${step}`;
    const currentSelected = selectedIngredients[stepKey] || [];

    const alreadySelected = currentSelected.find(item => item.splineName === ingredient.splineName);

    if (step === 3 && !alreadySelected && currentSelected.length >= 4) {
      if (!toastIdRef.current) { // 沒有 toastId 表示沒顯示中
        const replaced = currentSelected[0];
        toastIdRef.current = toast((t) => (
          <span className='p-2'>
            要將 <b>{replaced.name || replaced.splineName}</b> 換成 <b>{ingredient.name || ingredient.splineName}</b> 嗎？
            <div className="mt-2 flex flex-row justify-around mt-8">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => {
                  const updated = [...currentSelected.slice(1), ingredient];
                  dispatch(setStepIngredients({ step: stepKey, ingredients: updated }));
                  toast.dismiss(t.id);
                  toast.success("已替換食材！");
                  toastIdRef.current = null;
                }}
              >
                確認
              </button>
              <button
                className="btn btn-sm btn-outline"
                onClick={() => {
                  toast.dismiss(t.id);
                  toastIdRef.current = null;
                }}
              >
                取消
              </button>
            </div>
          </span>
        ), {
          duration: 10000,
        });
      }
      return;
    }

    dispatch(toggleIngredient({
      step: stepKey,
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
      toast.success("訂單已確認！", {
        duration: 4000,
      });
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
    <div ref={topRef} className='pt-25 flex flex-col min-h-screen p-8 transition-colors duration-500 ease-in-out'>
      <Step step={step} />
      <div className="flex flex-col md:flex-row transition-all duration-500">

        <div className={"md:w-3/4 w-full transition-all duration-500"}>
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
        <OrderDetails className="fixed bottom-5" isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className='mb-10 flex justify-around max-w-3/4 w-full mx-auto mt-6 px-4 items-start md:ml-2'>
        <button className='btn btn-outline border-primary text-primary hover:brightness-80 disabled:btn' onClick={handlePrevStep} disabled={step === 1}>上一步</button>
        <button className={step === 5 ? 'btn btn-success hover:brightness-80' : 'btn btn-primary hover:brightness-80'} onClick={handleClick} disabled={isDisabled(step)}>
          {step === 5 ? "確認訂單" : "下一步"}
        </button>
      </div>
    </div>
  )
}

export default Make
