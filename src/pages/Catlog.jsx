import { React, useState } from 'react'
import IngredientList from '../components/Catlog/IngredientList'
import { ingredients } from '../constants'
import { useSearchParams, useNavigate } from "react-router";

const Catlog = () => {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const tab = parseInt(queryParams.get("tab") || "1");
  const search = queryParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(search); // 記錄使用者在搜尋欄裡的輸入

  return (
    <div className="h-min-screen mx-16 mb-32">
      { /* 搜尋欄 */}
      <div className="mt-32 mb-8">
        <label className="input w-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
          <input type="search" placeholder="搜尋食材" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </label>
        {/* 顯示搜尋結果 */}
        {searchInput == "" ?
          <></> :
          <IngredientList ingredients={ingredients} searchInput={searchInput} /> 
        }
      </div>
      { /* 食材分類與卡片 */}
      {searchInput == "" ?
        <div role="tablist" className="tabs tabs-border transition duration-300 ease-in-out">
          <input type="radio" name="my_tabs" className="tab" aria-label="澱粉基底" defaultChecked={tab == 1} onChange={() => navigate("/catlog?tab=1")} />
          <div role="tabpanel" className="tab-content">
            <IngredientList ingredients={ingredients} step={1} searchInput={searchInput} />
          </div>
          <input type="radio" name="my_tabs" className="tab" aria-label="蛋白質主菜" defaultChecked={tab == 2} onChange={() => navigate("/catlog?tab=2")} />
          <div role="tabpanel" className="tab-content">
            <IngredientList ingredients={ingredients} step={2} searchInput={searchInput} />
          </div>
          <input type="radio" name="my_tabs" className="tab" aria-label="配菜" defaultChecked={tab == 3} onChange={() => navigate("/catlog?tab=3")} />
          <div role="tabpanel" className="tab-content">
            <IngredientList ingredients={ingredients} step={3} searchInput={searchInput} />
          </div>
          <input type="radio" name="my_tabs" className="tab" aria-label="其他" defaultChecked={tab == 4} onChange={() => navigate("/catlog?tab=4")} />
          <div role="tabpanel" className="tab-content">
            <IngredientList ingredients={ingredients} step={4} searchInput={searchInput} />
          </div>
        </div>
        : <></>
      }

    </div>
  )
}

export default Catlog
