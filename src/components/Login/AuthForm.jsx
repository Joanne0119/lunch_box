import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { login, register } from '../../firebase/authService';
import { useDispatch } from 'react-redux';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase"; 
import { setUser } from '../../redux/userSlice'; 
const AuthForm = ({theme}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const handleLogin = async () => {
    console.log("handleSignIn");
    try {
      const userCredential = await login(email, password);
      console.log("userCredential:", userCredential);
      const user = userCredential.user; 
      const userDocRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
      const userData = userSnap.data();
      console.log("從 Firestore 取得使用者資料:", userData);

      dispatch(setUser(userData));
      // window.location.reload();
      navigate('/');
    } else {
      console.error("找不到使用者資料");
      alert("找不到使用者資料，請聯絡管理員");
    }
    } catch (error) {
      console.error(error);
      let errorMessage = "登入失敗，請稍後再試";
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = "帳號或密碼錯誤";
      }
      alert(errorMessage);
    }
  };

   const handleRegister = async () => {
    console.log("handleRegister");
    try {
      const userCredential = await register(email, password, username);
      const user = userCredential.user;
      // dispatch(setUser({ uid: user.uid, email: user.email, displayName: username }));
      alert("註冊成功");
      
      window.location.reload();
      navigate('/login'); 
    } catch (error) {
      console.error(error);
      let errorMessage = "註冊失敗，請稍後再試";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "此信箱已被使用";
      } else if (error.code === 'auth/invalid-email') {
          errorMessage = "信箱格式不正確";
      }
      alert(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-lg p-8">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            isSignUp ? handleRegister() : handleLogin();
          }}
        >
          <div className="flex flex-col items-center mb-6">
          {
            theme === 'caramellatte' ?
            <img src="/assets/logoLight.png" alt="Logo" className='h-14 mb-4' />
            :
            <img src="/assets/logoDark.png" alt="Logo" className='h-14 mb-4' />
        }
            <h1 className="text-2xl font-bold">{isSignUp ? '註冊' : '登入'}</h1>
          </div>

          {isSignUp && (
            <div className="relative mb-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="請輸入您的使用者名稱"
                className="w-full px-4 py-2 pl-10 border border-secondary-300  rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
                autoComplete="off"
                required
              />
              <svg className="w-4 h-4 fill-current absolute left-3 top-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
            </svg>
            </div>
          )}

          <div className="relative mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="請輸入您的電子郵件"
              className="w-full px-4 py-2 pl-10 border border-secondary-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
              autoComplete="off"
              required
            />
            <svg className="w-4 h-4 fill-current absolute left-3 top-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入您的密碼"
              className="w-full px-4 py-2 pl-10 border border-secondary-300  rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
              autoComplete="off"
              required
            />
            <svg className="w-4 h-4 fill-current absolute left-3 top-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
            <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-3"
            >
                {!showPassword ? (
                <svg className='w-4 h-4 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
                ) : (
                    <svg className='w-4 h-4 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                )}
            </button>
          </div>

          {!isSignUp && (
            <div className="flex justify-between items-center mb-4 text-sm">
              <label className="flex items-center cursor-pointer select-none group">
                <div className="w-4 h-4 mr-2 bg-base-100 border border-base-primary rounded-sm flex items-center justify-center transition duration-150 group-hover:scale-110">
                    <input
                    type="checkbox"
                    className="hidden peer"
                    />
                    <svg
                    className="w-4 h-4 text-base-content hidden peer-checked:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-base-content/75">記住我</span>
                </label>
              <a href="#" className="text-base-content/75 hover:underline">
                忘記密碼?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 btn btn-primary text-white hover:text-gray-300 rounded-full font-semibold transition"
            // onClick={() => isSignUp ? handleRegister() : handleLogin()} 
          >
            {isSignUp ? '註冊' : '登入'}
          </button>

          <div className="mt-6 text-center text-sm">
            <p>
              <span>{isSignUp ? '已經有帳號了? ' : '還沒有帳號? '}</span>
              <span
                onClick={toggleAuthMode}
                className="text-content font-semibold hover:underline cursor-pointer"
              >
                {isSignUp ? ' 登入' : ' 註冊'}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
