import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const EndSection = () => {
  const fadeInEffect = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{
        backgroundImage: "url(/assets/homeBg.png)"
      }}>
      <div className="w-full h-full bg-secondary opacity-50"></div>
      <div className="hero-content text-neutral-content text-center z-10">
        <motion.div
          variants={fadeInEffect}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.7, once: true }}
          className="max-w-md"
        >
          <motion.h1
            variants={fadeInEffect}
            transition={{ duration: 0.7 }}
            className="mb-5 text-5xl font-bold">盒味盒子</motion.h1>
          <motion.p
            variants={fadeInEffect}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5"
          >
            多樣化的食材搭配，讓每一盒便當都合你心意，味你而生。
            <br />
            不僅享受美味，還能體驗搭配的樂趣，更能增進健康生活。
            <br />
            立即開始打造屬於你的專屬便當，讓每一餐都成為驚喜的旅程！
          </motion.p>
          <motion.button
            variants={fadeInEffect}
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

export default EndSection
