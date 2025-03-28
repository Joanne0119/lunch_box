import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className='text-center h-screen pt-20'>
        <h1 className='text-3xl md:text-5xl font-bold pt-20'>打造專屬的美味便當</h1>
        <p className='mt-8 sm:w-1/2 mx-auto text-sm md:text-base w-3/4'>
            我們提供個性化的便當選擇，讓您自由搭配喜愛的食材，享受健康美味的餐點。透過 3D 模擬技術，即時預覽便當外觀，讓每一餐都充滿驚喜！
        </p>
        <div className='flex justify-center align-center mt-10 sm:flex-row flex-col'>
            <button className='btn btn-primary md:mx-3 mx-10 my-2'>開始製作</button>
            <button className='btn btn-primary md:mx-3 mx-10 my-2'>了解更多</button>
        </div>
        
    </div>
  )
}

export default Hero
