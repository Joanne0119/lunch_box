import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const register = async (email, password, username) => {
  try {
    console.log('sign up summit');
    const res = await createUserWithEmailAndPassword(auth, email, password);

    console.log(res);
    console.log(email + ' ' + password);
    username = username || "user";

    const user = res.user;

    await usersRef.add({
      uid: user.uid,
      name: username,
      email: user.email,
      orderlist: [],
    });

    await signOut();
    console.log('User signed out after signing up');
    return res;
  } catch (err) {
    console.log(err);
    console.log('格式錯誤');
    throw err;
  }
};

export const login = async (email, password) => {
   signInWithEmailAndPassword(auth, email, password)
    try{
    console.log(res);
    console.log(email + ' ' + password);
    return res;

    }catch(err) {
      incorrectPasswordOrAcount();
      console.log(err);
      console.log('帳密錯誤或帳號不存在');
      throw err; 
    }
  
};

export const logout = async () => {
  return signOut(auth);
};
