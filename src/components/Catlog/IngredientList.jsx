import React from 'react'
import IngredientItem from './IngredientItem'

const IngredientList = ({ ingredients, step }) => {
    // 傳進來的 ingredients 是物件，可根據 step 決定欲存取的陣列
    const list = ingredients?.[`step${step}`] || [];
    
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
            {
                list.map(
                    (ingredient) => <IngredientItem ingredient={ingredient} key={ingredient.id} />
                )
            }
        </div>
    )
}

export default IngredientList
