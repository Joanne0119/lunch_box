import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedIngredients: {
    step1: [],
    step2: [],
    step3: [],
    step4: []
  }
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
    }
    ,
    toggleIngredient: (state, action) => {
      const { step, ingredient } = action.payload
      const list = state.selectedIngredients[step] || []
      const exists = list.find((item) => item.id === ingredient.id)

      if (step === 'step1' || step === 'step2') {
        state.selectedIngredients[step] = [ingredient]
      } else if (exists) {
        state.selectedIngredients[step] = list.filter((item) => item.id !== ingredient.id)
      } else {
        if (step === 'step3' && list.length >= 4) return // 限制最多 4 項
        state.selectedIngredients[step] = [...list, ingredient]
      }
    },
    updateStepIngredients: (state, action) => {
      const { step, data } = action.payload
      state.selectedIngredients[step] = data
    }
  }
})

export const { setStepIngredients, resetOrder, toggleIngredient, updateStepIngredients } = orderSlice.actions
export default orderSlice.reducer
