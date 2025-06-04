import React from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'motion/react'

const Hero = () => {
  const user = useSelector((state) => state.user.user) || null;
  console.log("Hero user:", user);

  const fadeInEffect = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      variants={fadeInEffect}
      initial="hidden"
      animate="show"
      className='text-center h-screen pt-20'
    >
      {/* 在能夠取得登入的狀態變數之前，先用 delay 處理視覺上的跳動感 */}
      <motion.div
        variants={fadeInEffect}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        {user ? (
          <h1 className='text-3xl md:text-5xl font-bold pt-20'>為{user.name}打造專屬的美味便當</h1>
        ) : (
          <h1 className='text-3xl md:text-5xl font-bold pt-20'>打造專屬的美味便當</h1>
        )}
      </motion.div>
      <motion.p
        variants={fadeInEffect}
        transition={{ duration: 0.5, delay: 1.4 }}
        className='mt-8 sm:w-1/2 mx-auto text-sm md:text-base w-3/4'
      >
        我們提供個性化的便當選擇，讓您自由搭配喜愛的食材，享受健康美味的餐點。透過 3D 模擬技術，即時預覽便當外觀，讓每一餐都充滿驚喜！
      </motion.p>
      <motion.div
        variants={fadeInEffect}
        transition={{ duration: 0.5, delay: 1.6 }}
        className='flex justify-center align-center mt-10 sm:flex-row flex-col'
      >
        <button className='btn btn-accent text-white hover:brightness-80 text-medium md:mx-3 mx-10 my-2'>
          {
            user ? (
              <Link to="/make">
                開始製作
              </Link>
            ) : (
              <Link to="/login">
                立即登入
              </Link>
            )
          }
        </button>
        <button className='btn btn-secondary text-white hover:brightness-80 text-medium md:mx-3 mx-10 my-2'>
          {
            user ? (
              <a href="#about">
                了解更多
              </a>
            ) : (
              <Link to="/make">
                開始製作
              </Link>
            )
          }
        </button>
      </motion.div>
    </motion.div>
  )
}

export default Hero
