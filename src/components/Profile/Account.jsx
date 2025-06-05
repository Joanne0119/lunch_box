import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { updateEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from 'react-hot-toast';
import { updateUser, setAvatar } from '../../redux/userSlice';

const Account = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user) || null;
    const [nickname, setNickname] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const fileInputRef = useRef(null);
    // const [avatar, setAvatar] = useState('/assets/guest.png');
    const avatar = useSelector((state) => state.user.profileImage) || '/assets/guest.png';

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
        const imageURL = URL.createObjectURL(file);
        dispatch(setAvatar(imageURL));
        } else {
        alert('請選擇圖片檔案');
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

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
       <div className="flex flex-col items-center transition-colors duration-500 ease-in-out px-4">
        {/* 大頭照區塊 */}
        <div className="relative mt-6">
            <img
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border border-primary/20 border-1 p-1 rounded-full"
            src={avatar}
            alt="帳號頭像"
            />
            <button
            className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4"
            title="更換頭像"
            onClick={handleClick}
            >
            <img className="w-8 h-8 sm:w-10 sm:h-10" src="/assets/camera.png" alt="更換頭像" />
            </button>
            <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            />
        </div>

        {/* 帳戶資料區塊 */}
        <div className="flex flex-col items-center justify-center mt-10 w-full max-w-xs sm:max-w-md md:max-w-lg space-y-6">
            {/* 使用者名稱 */}
            <div className="flex flex-col md:flex-row items-start md:items-center w-full">
            <label htmlFor="nickname" className="md:w-32 mb-2 md:mb-0 text-left mr-0 md:mr-4">使用者名稱</label>
            <input
                id="nickname"
                type="text"
                placeholder="請輸入您的使用者名稱"
                className="input light:input-neutral dark:input-primary w-full"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            </div>

            {/* 電子郵件地址 */}
            <div className="flex flex-col md:flex-row items-start md:items-center w-full">
            <label htmlFor="email" className="md:w-32 mb-2 md:mb-0 text-left mr-0 md:mr-4">電子郵件地址</label>
            <input
                id="email"
                type="email"
                placeholder="請輸入您的電子郵件地址"
                className="input light:input-neutral dark:input-primary w-full"
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
        </div>

        {/* 按鈕區塊 */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12 mb-16">
            <button className="btn border-primary bg-transparent px-6 py-3 text-primary">變更密碼</button>
            <button 
            className="btn btn-primary px-6 py-3 hover:brightness-80"
            onClick={handleSaveChanges}
            >
            儲存變更
            </button>
        </div>
        </div>

    )
}

export default Account