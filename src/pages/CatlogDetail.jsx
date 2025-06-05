import React from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router'
import { ingredients, typeMap } from '../constants'
import Carousel from '../components/Catlog/Carousel'

const CatlogDetail = () => {
  const navigate = useNavigate();

  const { ingredientType } = useParams(); // 食材類別-編號
  const split = ingredientType.split('-');
  const number = parseInt(split[1]); // 取得食材編號 (which is stateid)
  const type = split[0];
  const [queryParams] = useSearchParams();
  const currentTab = queryParams.get('tab'); // 由網址 query 取得當前的 tab（step）編號
  console.log("currentTab", currentTab);
  const currentSearch = queryParams.get('search'); // 由網址 query 取得當前的 search 內容

  let ingredient;// 取得食材資料
  if (currentTab === '0' || currentTab === '-1') {
    // 合併所有 step 陣列
    const allIngredients = Object.values(ingredients).flat();
    console.log("allIngredients", allIngredients);
    console.log("type", type, "number", number);
    ingredient = allIngredients.find(item => item.type === type && item.stateid === number);
    console.log("ingredient", ingredient);
  } else {
    // For specific category tabs (step 1-4), number is effectively the index + 1
    ingredient = ingredients[`step${currentTab}`]?.[number - 1];
  }

  const typeZH = typeMap[type];

  if (!ingredient) {
    return <div className="text-center h-screen flex justify-center items-center transition-colors duration-500 ease-in-out ">
        <h1 className="text-2xl font-bold">找不到該食材資料</h1>
      </div>;
  }

  return (
    <div className="h-min-screen mx-16 mb-32 transition-colors duration-500 ease-in-out">
      {/* 搜尋欄
      <div className="mt-32 mb-8">
        <label className="input w-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
          <input type="search" required placeholder="搜尋食材" />
        </label>
      </div> */}
      {/* 目前分類及所選食材 */}
      <div className="opacity-80 flex items-center mt-32">
        <button
          onClick={() => navigate(`/catlog?tab=${currentTab}&search=${currentSearch}`)}
          className="bg-transparent border-none p-0 m-0 cursor-pointer"
        >
          <span>{`${typeZH}`}</span>
        </button>
        <span>{`>>${ingredient.name}`}</span>
      </div>
      {/* 食材詳細資料 */}
      <div>
        <div className="w-full flex items-center justify-between">
          {/* 文字+返回按鈕 */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold">{ingredient.name}</h1>
            <p className="text-lg mt-2 mb-8">{ingredient.description}</p>
          </div>
          <div>
            <button
              className="btn btn-primary hover:brightness-80"
              onClick={() => navigate(`/catlog?tab=${currentTab}&search=${currentSearch}`)}
            >返回</button>
          </div>
        </div>
        {/* 圖片輪播 */}
        <Carousel ingredient={ingredient} />
      </div>
    </div>
  )
}

export default CatlogDetail