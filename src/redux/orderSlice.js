import { createSlice } from '@reduxjs/toolkit'
import { b, s } from 'motion/react-client'

const initialState = {
  selectedIngredients: {
    step1: [],
    step2: [],
    step3: [],
    step4: []
  },
  bentoName: '',
  currentStep: 1,
  isConfirmed: false,
  totalKcal: 0,
  totalPrice: 0
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setStepIngredients: (state, action) => {
      const { step, ingredients } = action.payload
      state.selectedIngredients[step] = ingredients
    },
    resetOrder: state => {
      state.selectedIngredients = {
        step1: [],
        step2: [],
        step3: [],
        step4: []
      }
      state.bentoName = '',
      state.currentStep = 1,
      state.isConfirmed = false,
      state.totalKcal = 0,
      state.totalPrice = 0
    }
    ,
    toggleIngredient: (state, action) => {
      const { step, ingredient } = action.payload
      const list = state.selectedIngredients[step] || []
      const exists = list.find((item) => item.id === ingredient.id)

      if (exists) {
        state.selectedIngredients[step] = list.filter((item) => item.id !== ingredient.id)
      } else {
        if (step === 'step3' && list.length >= 4) return // 限制最多 4 項
        state.selectedIngredients[step] = [...list, ingredient]
      }
    },
    updateStepIngredients: (state, action) => {
      const { step, data } = action.payload
      state.selectedIngredients[step] = data
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload
    },
    setIsComfirmed: (state, action) => {
      state.isConfirmed = action.payload
    },
    setBentoName: (state, action) => {
      state.bentoName = action.payload
    },
    setTotalKcal: (state, action) => {
      state.totalKcal = action.payload
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    }
  }
})

export const { setStepIngredients, 
                resetOrder, 
                toggleIngredient, 
                updateStepIngredients,
                setCurrentStep, 
                setIsComfirmed, 
                setBentoName,
                setTotalKcal,
                setTotalPrice
               } = orderSlice.actions
export default orderSlice.reducer
