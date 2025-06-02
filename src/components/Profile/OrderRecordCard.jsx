import React from "react";

const OrderRecordCard = ({ order }) => {
    console.log("Order debug:", order);

    return (
        <div className="bg-base-300 border-1 border-neutual border-opacity-30 rounded-sm flex items-start flex-col py-6 pl-4 mb-6 w-full">
            {/* 便當圖片 */}
            {/* <figure>
                <img
                    src={order.image}
                    alt="便當圖片"
                    className="w-60 h-40 sm:mb-0 mb-4"
                />
            </figure> */}
            {/* 訂單描述 */}
            <div className="mx-5 leading-7">
                <h2 className="font-bold text-lg mb-1">{order.name}</h2>
                <p>下單時間：{new Date(order.createdAt).toLocaleString()}</p>
                <p>便當菜色：</p>
                <div className="flex flex-wrap gap-2 mt-2">
                {[order.ingredients.step2?.[0], order.ingredients.step1?.[0], 
                    ...(order.ingredients.step3 || []), 
                    ...(order.ingredients.step4 || [])]
                    .filter(Boolean) // 避免 undefined
                    .map((item, idx) => (
                    <span key={idx} className="badge badge-outline">
                        {item.name}
                    </span>
                ))}
                </div>
            </div>
        </div>
    )
}

export default OrderRecordCard