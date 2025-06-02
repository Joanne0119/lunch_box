import React from 'react'
import { Link } from 'react-router'

const EndSection = () => {
  return (
    <div
  className="hero min-h-screen bg-base-100"
  style={{
    backgroundImage: "url(/assets/homeBg.png)"
  }}>
  <div className="w-full h-full bg-secondary opacity-50"></div>
  <div className="hero-content text-neutral-content text-center z-10">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">盒味盒子</h1>
      <p className="mb-5">
        多樣化的食材搭配，讓每一盒便當都合你心意，味你而生。
        <br />
        不僅享受美味，還能體驗搭配的樂趣，更能增進健康生活。
        <br />
        立即開始打造屬於你的專屬便當，讓每一餐都成為驚喜的旅程！
      </p>
      <button className="btn btn-secondary text-white hover:brightness-80 text-medium">
        <Link to="/make">
          開始製作
        </Link>
      </button>
    </div>
  </div>
</div>
  )
}

export default EndSection
