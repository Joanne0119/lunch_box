import React from 'react'
import { Link } from 'react-router'

const Feature = () => {
  return (
    <div className="hero bg-base-200 p-5 pb-20">
        <div className="hero-content text-center">
            <div>
                <h1 className="text-5xl font-bold p-8">我們的特色</h1>
                <div className='mt-10 flex flex-col md:flex-row'>
                    <div className="card bg-base-100 md:mx-5 mx-10 my-4 shadow-sm rounded-xl">
                        <figure className="px-10 pt-10">
                        <svg className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
                        </svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                隨心所欲，
                                <br className='md:block hidden'/>
                                打造專屬你的美味便當！
                            </h2>
                            <p>我們提供個性化的便當選擇，讓您自由搭配喜愛的食材，享受健康美味的餐點。</p>
                            <div className="card-actions">
                            <button className="btn btn-secondary dark:btn-primary mt-2">
                            <Link to="/make">
                                開始製作
                            </Link>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 md:mx-5 mx-10 my-4 shadow-sm rounded-xl">
                        <figure className="px-10 pt-10">
                        <svg className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"/>
                        </svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                隨時掌握，
                                <br className='md:block hidden'/>
                                了解每一口的營養價值！
                            </h2>
                            <p>我們清楚呈現食材的營養價值與標示，讓您每一口都可以吃的安心又健康。</p>
                            <div className="card-actions">
                            <button className="btn btn-secondary dark:btn-primary mt-2">
                                <Link to="/catlog">
                                查看營養資訊
                                </Link>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 md:mx-5 mx-10 my-4 shadow-sm rounded-xl">
                        <figure className="px-10 pt-10">
                        <svg className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14l0 216c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381L0 184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8l0 197c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8l0-216c0-5.9 3.2-11.2 8.3-14l176-96z"/>
                        </svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                隨時體驗，
                                <br className='md:block hidden'/>
                                享受3D模擬便當的樂趣！
                            </h2>
                            <p>我們打造出3D的便當模擬技術，即時預覽便當外觀，讓每一餐都充滿驚喜！</p>
                            <div className="card-actions">
                            <button className="btn btn-secondary dark:btn-primary mt-2">
                            <Link to="/make">
                                開始製作
                            </Link>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature
