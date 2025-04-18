import React, { useState } from 'react'
import Account from './Account'
import OrderRecord from './OrderRecord'
import { useSearchParams } from 'react-router'

const Drawer = () => {
  const [currentSelected, setCurrentSelected] = useState(1); // 記錄當前選擇的 drawer 按鈕＆頁面

  return (
    <div className="drawer lg:drawer-open transition duration-300 ease-in-out">

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* Page content here */}
      <div className="drawer-content mt-34 lg:ml-4">
        {/* 螢幕寬度過小時收起 drawer */}
        <label 
          htmlFor="my-drawer" 
          className="drawer-button border-none cursor-pointer bg-base-100 p-4 rounded-lg lg:hidden fixed top-20 left-2 mt-4 ml-4"
        >
          <img className="w-8 h-8" src="/assets/guest.png" alt="帳號頭像" />
        </label>
        {currentSelected === 1 ? <Account /> : <OrderRecord />}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 px-4 pt-26 text-lg">
          {/* Sidebar content here */}
          <div className="flex flex-col items-center justify-center">
            <img className="w-16 h-16" src="/assets/guest.png" alt="帳號頭像" />
            <p className="mt-2 mb-1">訪客</p>
            <p className="text-sm opacity-50 mb-10">myaccount@gmail.com</p>
          </div>
          <li className="mb-2" id="account">
            <button
              onClick={() => setCurrentSelected(1)}
              className={
                currentSelected === 1 ?
                  "border-none m-0 cursor-pointer pl-4 py-2 bg-base-300 font-semibold" :
                  "border-none m-0 cursor-pointer pl-4 py-2 bg-transparent"
              }
            >帳戶設定</button>
          </li>
          <li className="mb-2" id="order__record">
            <button
              onClick={() => setCurrentSelected(2)}
              className={
                currentSelected === 2 ?
                  "border-none m-0 cursor-pointer pl-4 py-2 bg-base-300 font-semibold" :
                  "border-none m-0 cursor-pointer pl-4 py-2 bg-transparent"
              }
            >我的訂單</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer

