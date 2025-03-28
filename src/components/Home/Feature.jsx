import React from 'react'

const Feature = () => {
  return (
    <div className="hero bg-base-200 min-h-screen p-5">
        <div className="hero-content text-center">
            <div>
                <h1 className="text-5xl font-bold p-8">我們的特色</h1>
                <div className='mt-10 flex flex-col md:flex-row'>
                    <div className="card bg-base-100 md:mx-5 mx-10 my-4 shadow-sm rounded-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                隨心所欲，
                                <br className='md:block hidden'/>
                                打造專屬你的美味便當！
                            </h2>
                            <p>我們提供個性化的便當選擇，讓您自由搭配喜愛的食材，享受健康美味的餐點。</p>
                            <div className="card-actions">
                            <button className="btn btn-secondary dark:btn-primary mt-2">開始製作</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 md:mx-5 mx-10 my-4 shadow-sm rounded-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                隨時掌握，
                                <br className='md:block hidden'/>
                                了解每一口的營養價值！
                            </h2>
                            <p>我們清楚呈現食材的營養價值與標示，讓您每一口都可以吃的安心又健康。</p>
                            <div className="card-actions">
                            <button className="btn btn-secondary dark:btn-primary mt-2">查看營養資訊</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 md:mx-5 mx-10 my-4 shadow-sm rounded-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                隨時體驗，
                                <br className='md:block hidden'/>
                                享受3D模擬便當的樂趣！
                            </h2>
                            <p>我們打造出3D的便當模擬技術，即時預覽便當外觀，讓每一餐都充滿驚喜！</p>
                            <div className="card-actions">
                            <button className="btn btn-secondary dark:btn-primary mt-2">開始製作</button>
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
