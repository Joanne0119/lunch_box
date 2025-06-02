import React from 'react'
import { useSelector} from 'react-redux';

const Account = () => {
    const user = useSelector((state) => state.user.user) || null;
    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">請先登入</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center">
            {/* 大頭照 */}
            <img className="w-30 h-30 mt-6 relative" src="/assets/guest.png" alt="帳號頭像" />
            <button className="bg-transparent border-none cursor-pointer absolute mt-26 ml-28" title="更換頭像">
                <img className="w-10 h-10" src="/assets/camera.png" alt="更換頭像" />
            </button>
            {/* 帳戶資料 */}
           <div className="flex flex-col items-center justify-center mt-10 space-y-6">
            {/* 使用者名稱 */}
            <div className="flex items-center">
                <label htmlFor="nickname" className="w-32 text-left mr-4">使用者名稱</label>
                <input
                id="nickname"
                type="text"
                placeholder="請輸入您的使用者名稱"
                defaultValue={user.name}
                className="input light:input-neutral dark:input-primary w-80"
                />
            </div>

            {/* 電子郵件地址 */}
            <div className="flex items-center">
                <label htmlFor="email" className="w-32 text-left mr-4">電子郵件地址</label>
                <input
                id="email"
                type="email"
                placeholder="請輸入您的電子郵件地址"
                defaultValue={user.email}
                className="input light:input-neutral dark:input-primary w-80"
                />
            </div>

            </div>

            {/* 儲存變更按鈕 */}
            <div className='flex flex-row items-center justify-center space-x-4'>
                <button className="btn border-primary bg-transparent px-8 py-6 mt-20 lg:mb-0 text-primary mb-16">變更密碼</button>
                <button className="btn btn-primary px-8 py-6 mt-20 lg:mb-0 mb-16">儲存變更</button>
            </div>
        </div>
    )
}

export default Account