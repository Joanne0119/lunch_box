import React from 'react'
import IngredientItem from './IngredientItem'

const IngredientList = ({ ingredients, step, searchInput }) => {
    // 傳進來的 ingredients 是物件，可根據 step 或 searchInput 決定欲存取的陣列
    let list = [];
    if(step){
        list = ingredients?.[`step${step}`] ?? [];
        // searchInput 的值為空，表示沒有搜尋
    }else if(searchInput){
        list = Object.values(ingredients || {}).flat().filter(
            // 因為只有中文搜尋，所以先不檢查大小寫
            ingredient => ingredient.name.includes(searchInput)
        );
        step = -1; // 設定 step 為 -1 以表示搜尋結果（之後會再依照食材分類調整）     
    }

    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 mt-8">
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
