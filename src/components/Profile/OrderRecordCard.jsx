import React from "react";

const OrderRecordCard = ({ order }) => {
    return (
        <div className="bg-base-300 border-1 border-neutual border-opacity-30 rounded-sm flex items-center sm:flex-row flex-col py-6 pl-4 mb-6 w-full">
            {/* 便當圖片 */}
            <figure>
                <img
                    src={order.image}
                    alt="便當圖片"
                    className="w-60 h-40 sm:mb-0 mb-4"
                />
            </figure>
            {/* 訂單描述 */}
            <div className="mx-4">
                <h2 className="font-bold text-lg">訂單編號：{order.number}</h2>
                <p>下單時間：{order.time}</p>
                <div className="flex">
                    <p>便當菜色：</p>
                    <div>
                        <p>{order.starch.name}*{order.starch.quantity}</p>
                        <p>{order.protein.name}*{order.protein.quantity}</p>
                        {order.vegetable.map((veg, idx) => 
                            <span key={idx}>
                                {`${veg.name}*${veg.quantity} `}
                            </span>
                        )}
                        <br />
                        {order.other.map((other, idx) => 
                            <span key={idx}>
                                {`${other.name}*${other.quantity} `}
                            </span>
                        )}
                    </div>
                </div>
                <p>備註：{order.note}</p>
            </div>
        </div>
    )
}

export default OrderRecordCard