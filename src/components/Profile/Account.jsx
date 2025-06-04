import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { updateEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from 'react-hot-toast';
import { updateUser } from '../../redux/userSlice';

const Account = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user) || null;
    const [nickname, setNickname] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');

    useEffect(() => {
    if (user) {
        setNickname(user.name || '');
        setEmail(user.email || '');
    }
    }, [user]);

    const handleSaveChanges = async () => {
        try {
        // 更新 Firestore 使用者名稱
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, { name: nickname });
        console.log("Firestore 使用者名稱更新成功");

        if (nickname != user.name) {
            const updatedUser = { ...user, name: nickname, email: email };
            // 更新 Redux 狀態
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, updatedUser);
            console.log("Redux 狀態更新成功");
            dispatch(updateUser({ name: nickname, email: email }));
        }

            toast.success("帳戶資料已更新！", {
                duration: 4000,
            });
        } catch (error) {
            toast.error("更新失敗，請稍後再試", {
                duration: 4000,
            });
        }
    };
    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen transition-colors duration-500 ease-in-out">
                <p className="text-lg font-bold">請先登入</p>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center transition-colors duration-500 ease-in-out">
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
                className="input light:input-neutral dark:input-primary w-80"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                />
            </div>

            {/* 電子郵件地址 */}
            <div className="flex items-center">
                <label htmlFor="email" className="w-32 text-left mr-4">電子郵件地址</label>
                <input
                id="email"
                type="email"
                placeholder="請輸入您的電子郵件地址"
                className="input light:input-neutral dark:input-primary w-80"
                value={email}
                disabled={true} // 禁用輸入框，因為 Firebase Auth 的 email 不能直接修改
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            </div>

            {/* 儲存變更按鈕 */}
            <div className='flex flex-row items-center justify-center space-x-4'>
                <button className="btn border-primary bg-transparent px-8 py-6 mt-20 lg:mb-0 text-primary mb-16">變更密碼</button>
                <button 
                    className="btn btn-primary px-8 py-6 mt-20 lg:mb-0 mb-16"
                    onClick={handleSaveChanges}
                >儲存變更</button>
            </div>
        </div>
    )
}

export default Account