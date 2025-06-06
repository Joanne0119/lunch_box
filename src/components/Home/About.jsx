import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import { images } from '../../constants';
import { motion } from 'motion/react'
import { view } from 'motion/react-client';

const About = () => {
  const fadeSlideEffect = {
    hidden: { x:-100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <div id='about' className="hero bg-base-300 max-h-screen px-10 pb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/3] mx-5 rounded-3xl overflow-hidden'>
          {/* <img src="/assets/about1.png" className="" /> */}
          <ImageCarousel />
        </div>
        <motion.div
          variants={fadeSlideEffect}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.7, once: true }}
        >
          <motion.h1
            variants={fadeSlideEffect}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mt-10"
          >我們的理念與願景</motion.h1>
          <motion.p
            variants={fadeSlideEffect}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="py-6"
          >
            我們致力於提供個性化的健康便當，讓每位顧客都能享受獨特的用餐體驗。透過3D可視化技術，我們提升了點餐的互動性與趣味性。
          </motion.p>
          <motion.button
            variants={fadeSlideEffect}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="btn btn-secondary text-white hover:brightness-80 text-medium"
          >
            <Link to="/make">
              開始製作
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About

function ImageCarousel() {

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
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
            }`}
          alt={`Slide ${i}`}
        />
      ))}
    </div>
  );
}