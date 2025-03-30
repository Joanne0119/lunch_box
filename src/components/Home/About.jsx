import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';

const About = () => {
  return (
    <div id='about' className="hero bg-base-300 max-h-screen px-10 pb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/3] mx-5 rounded-3xl overflow-hidden'>
        {/* <img src="/assets/about1.png" className="" /> */}
        <ImageCarousel />
      </div>
      <div>
        <h1 className="text-5xl font-bold mt-10">我們的理念與願景</h1>
        <p className="py-6">
          我們致力於提供個性化的健康便當，讓每位顧客都能享受獨特的用餐體驗。透過3D可視化技術，我們提升了點餐的互動性與趣味性。
        </p>
        <button className="btn btn-primary">
          <Link to="/make">
            開始製作
          </Link>
          </button>
      </div>
    </div>
  </div>
  )
}

export default About

function ImageCarousel() {
  const images = [
    "/assets/about1.png",
    "/assets/about2.png",
    "/assets/about3.png",
    "/assets/about4.png",
    "/assets/about5.png",
    "/assets/about6.png",
    "/assets/about7.png",
  ];

  const [index, setIndex] = useState(0);

  // 自動切換圖片
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 每3秒換一張

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${i}`}
        />
      ))}
    </div>
  );
}