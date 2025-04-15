import React from 'react'

const Account = () => {
    return (
        <div className="flex flex-col items-center">
            {/* 大頭照 */}
            <img className="w-30 h-30 mt-6 relative" src="/assets/guest.png" alt="帳號頭像" />
            <button className="bg-transparent border-none cursor-pointer absolute mt-26 ml-28">
                <img className="w-10 h-10" src="/assets/camera.png" alt="更換頭像" />
            </button>
            {/* 帳戶資料 */}
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="flex items-center">
                    <label htmlFor="nickname" className="whitespace-nowrap mr-4">暱稱</label>
                    <input
                        type="text"
                        placeholder="請輸入您的暱稱"
                        defaultValue="訪客"
                        className="input light:input-neutral dark:input-primary lg:w-lg sm:w-sm w-65"
                    />
                </div>
                <div className="flex items-center mt-6">
                    <label htmlFor="email" className="whitespace-nowrap mr-4">電子郵件地址</label>
                    <input
                        type="email"
                        placeholder="請輸入您的電子郵件地址"
                        defaultValue="myaccount@gmail.com"
                        className="input light:input-neutral dark:input-primary lg:w-md sm:w-xs w-50"
                    />
                </div>
                <div className="flex items-center mt-6">
                    <label htmlFor="password" className="whitespace-nowrap mr-4">密碼</label>
                    <input
                        type="password"
                        defaultValue="password"
                        className="input light:input-neutral dark:input-primary lg:w-lg sm:w-sm w-65"
                        disabled
                    />
                </div>
            </div>
            {/* 儲存變更按鈕 */}
            <button className="btn btn-primary px-8 py-6 mt-20">儲存變更</button>
        </div>
    )
}

export default Account