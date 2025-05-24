import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { db } from "./firebase";
import { collection } from "firebase/firestore";
const usersRef = collection(db, "users");

export const register = async (email, password, username) => {
  try {
    console.log('sign up summit');
    const res = await createUserWithEmailAndPassword(auth, email, password);

    console.log(res);
    console.log(email + ' ' + password);
    username = username || "user";

    const user = res.user;

    // await usersRef.add({
    //   uid: user.uid,
    //   name: username,
    //   email: user.email,
    //   orderlist: [],
    // });

    //await signOut();
    console.log('User signed out after signing up');
    return res;
  } catch (err) {
    console.error(err);
    console.log('註冊錯誤：', err.code);
    throw err;
  }
};

export const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    console.log(email + ' ' + password);
    return res;
  } catch (err) {
    console.error(err);
    console.log('登入錯誤：', err.code);
    throw err;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("登出錯誤:", error);
    throw error; // 重新拋出錯誤，讓呼叫者處理
  }
};