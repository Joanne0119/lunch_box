import React, { useState } from 'react'
import Account from './Account'
import OrderRecord from './OrderRecord'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { logout as logoutAction } from '../../firebase/authService';

const Drawer = () => {
  const [currentSelected, setCurrentSelected] = useState(1); // 記錄當前選擇的 drawer 按鈕＆頁面
  const user = useSelector((state) => state.user.user) || null;
  const avatar = useSelector((state) => state.user.profileImage) || '/assets/guest.png';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen transition-colors duration-500 ease-in-out">
        <p className="text-lg font-bold">請先登入</p>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open transition-all duration-500 ease-in-out">

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* Page content here */}
      <div className="drawer-content mt-34 lg:ml-4">
        {/* 螢幕寬度過小時收起 drawer */}
        <label 
          htmlFor="my-drawer" 
          className="drawer-button border-none cursor-pointer bg-base-100 p-4 rounded-lg lg:hidden fixed top-20 left-2 mt-4 ml-4"
        >
          <img className="w-8 h-8 object-cover" src={avatar} alt="帳號頭像" />
        </label>
        {currentSelected === 1 ? <Account /> : <OrderRecord />}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 px-4 pt-26 text-lg flex flex-col justify-between">
          {/* Sidebar content here */}
          <div className='flex flex-col justify-between mb-10'>
            <div className="flex flex-col items-center justify-center">
            <img className="w-16 h-16 border border-primary/20 border-1 p-1 rounded-full object-cover" src={avatar}alt="帳號頭像" />
            <p className="mt-2 mb-1">{user.name}</p>
            <p className="text-sm opacity-50 mb-10">{user.email}</p>
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
          </div>
          <button
            onClick={() => {
              dispatch(logout())
              // window.location.reload() 
              logoutAction()
              navigate('/')
            }}
            className="text-sm mb-4 w-full btn btn-outline border-accent text-accent font-semibold py-2 rounded-lg hover:brightness-80"
          >登出</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer

