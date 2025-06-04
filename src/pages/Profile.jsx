import React from 'react'
import Drawer from '../components/Profile/Drawer'
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'motion/react';

const Profile = () => {
  const user = useSelector((state) => state.user.user) || null;
  const fadeInEffect = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (!user) {
    return (
      <div className='h-screen flex flex-col justify-center items-center transition-colors duration-500 ease-in-out'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-24 h-24 mb-4 fill-current'>
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
        <p className='text-2xl font-bold'>請先登入</p>
      </div>
    )
  }
  return (
    <motion.div
      variants={fadeInEffect}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.7 }}
      className='h-min-screen relative transition-colors duration-500 ease-in-out'
    >
      <Drawer />
    </motion.div>
  )
}

export default Profile
