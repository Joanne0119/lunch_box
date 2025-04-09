import React, { useState } from 'react'

const Carousel = ({ ingredient }) => {
    const imgs = [
        ingredient.image,  // 食材本身的圖片（3D）
        `/assets/conceptImage/${ingredient.name}-concept.jpg`, // 食材本身的圖片（2D）
        `/assets/nutrientImage/${ingredient.name}-nutrient.png`, // 營養標示
    ]

    const [index, setIndex] = useState(0); // 設定當前顯示的圖片索引
    const prev = () => {
        setIndex(index - 1); // 上一張圖片
        if (index === 0) setIndex(imgs.length - 1);
    }
    const next = () => {
        setIndex(index + 1); // 下一張圖片
        if (index === imgs.length - 1) setIndex(0);
    }

    return (
        <div className="relative w-full bg-base-200 rounded-lg overflow-hidden h-100" >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {imgs.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        className="w-full h-100 aspect-[3/2] flex-shrink-0 object-contain"
                        alt={`slide#${i}`}
                    />
                ))}
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={prev} className="btn btn-circle bg-base-300 border-base-300">❮</button>
                <button onClick={next} className="btn btn-circle bg-base-300 border-base-300">❯</button>
            </div>
        </div>
    )
}

export default Carousel