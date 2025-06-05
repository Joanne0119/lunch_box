import React from 'react'
import IngredientItem from './IngredientItem'

const IngredientList = ({ ingredients, step, searchInput }) => {
    // 傳進來的 ingredients 是物件，可根據 step 或 searchInput 決定欲存取的陣列
    let list = [];
    if (searchInput) {
        // 有搜尋關鍵字時，從所有 step 撈資料過濾
        list = Object.values(ingredients || {}).flat().filter(
            ingredient => ingredient.name.includes(searchInput)
        );
        step = -1;
    } else if (step === 0) {
        // 沒有搜尋、tab 為所有食材
        list = Object.values(ingredients || {}).flat();
    } else {
        // 一般 step tab（step1 ~ step4）
        list = ingredients?.[`step${step}`] ?? [];
    }
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3 sm:gap-5 mt-8">
            {
                list.map(
                    (ingredient) =>
                        <IngredientItem
                            ingredient={ingredient}
                            step={step}
                            index={ingredient.stateid}
                            searchInput={searchInput}
                            key={ingredient.id}
                        />
                )
            }
        </div>
    )
}

export default IngredientList
