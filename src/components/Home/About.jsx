import React from 'react'

const About = () => {
  return (
    <div className='md:px-30 px-15 mb-100 flex flex-col justify-center items-start'>
      <h2 className='text-black text-3xl font-bold'>我們的理念與願景</h2>
      <p className='mt-5 sm:w-1/2 text-black mb-10 w-3/4 text-sm md:text-base'>
        我們致力於提供個性化的健康便當，讓每位顧客都能享受獨特的用餐體驗。透過3D可視化技術，我們提升了點餐的互動性與趣味性。
      </p>
      <button className='border-[#DDA15E] bg-[#FEFAE0] border-2 text-[#DDA15E] font-bold py-3 px-5 rounded-lg hover:bg-[#DDA15E] hover:text-[#FEFAE0] transition-all mr-5'>開始製作</button>
    </div>
  )
}

export default About
