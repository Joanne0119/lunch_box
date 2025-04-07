import React from 'react'
import { useParams, useSearchParams, Link, useNavigate } from 'react-router'
import { ingredients, typeMap } from '../constants'

const CatlogDetail = () => {
  const navigate = useNavigate();

  const { ingredientType } = useParams(); // 食材類別-編號
  const split = ingredientType.split('-');
  const typeZH = typeMap[split[0]]; // 食材類別中文名稱
  const number = split[1]; // 取得食材編號

  const [queryParams] = useSearchParams();
  const currentTab = queryParams.get('tab'); // 由網址 query 取得當前的 tab（step）編號

  const ingredient = ingredients[`step${currentTab}`]?.[number - 1]; // 取得食材資料

  return (
    <div className="h-min-screen mx-16 mb-32">
      {/* 搜尋欄 */}
      <div className="mt-32 mb-8">
        <label className="input w-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
          <input type="search" required placeholder="搜尋食材" />
        </label>
      </div>
      {/* 目前分類及所選食材 */}
      <div className="opacity-80 flex items-center">
        <button
          onClick={() => navigate(`/catlog?tab=${currentTab}`)}
          className="bg-transparent border-none p-0 m-0 cursor-pointer"
        >
          <span>{`${typeZH}`}</span>
        </button>
        <span>{`>>${ingredient.name}`}</span>
      </div>
    </div>
  )
}

export default CatlogDetail