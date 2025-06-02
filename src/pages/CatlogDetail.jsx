import React from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router'
import { ingredients, typeMap } from '../constants'
import Carousel from '../components/Catlog/Carousel'

const CatlogDetail = () => {
  const navigate = useNavigate();

  const { ingredientType } = useParams(); // 食材類別-編號
  const split = ingredientType.split('-');
  const typeZH = typeMap[split[0]]; // 食材類別中文名稱
  const number = split[1]; // 取得食材編號

  const [queryParams] = useSearchParams();
  const currentTab = queryParams.get('tab'); // 由網址 query 取得當前的 tab（step）編號
  const currentSearch = queryParams.get('search'); // 由網址 query 取得當前的 search 內容

  const ingredient = ingredients[`step${currentTab}`]?.[number - 1]; // 取得食材資料

  return (
    <div className="h-min-screen mx-16 mb-32">
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
              className="btn btn-primary hover:text-gray-300"
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