import React from 'react'
import Drawer from '../components/Profile/Drawer'
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.user) || null;
  if (!user) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <p className='text-2xl'>請先登入</p>
      </div>
    )
  }
  return (
    <div className='h-min-screen relative'>
      <Drawer />
    </div>
  )
}

export default Profile
