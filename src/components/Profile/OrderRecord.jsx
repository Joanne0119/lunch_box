import React, { useState } from 'react'
import orderData from '@/json/orderData.json' // 假設訂單資料存放在這個路徑
import OrderRecordCard from './OrderRecordCard'

const OrderRecord = () => {
    const [pageNumber, setPageNumber] = useState(1); // 頁碼
    const itemsPerPage = 2;
    const totalPages = Math.ceil(orderData.length / itemsPerPage);
    
    const prev = () => {
        setPageNumber(Math.max(pageNumber - 1, 1)); // 上一頁
    }
    const next = () => {
        setPageNumber(Math.min(pageNumber + 1, totalPages)); // 下一頁
    }

    const currentOrderData = orderData.slice(
        (pageNumber - 1) * itemsPerPage,
        pageNumber * itemsPerPage
      );

    return (
        <div className="flex flex-col items-center lg:ml-8 lg:mr-10 mx-12 lg:mt-0 mt-6">
            {/* 訂單List */}
            {
                currentOrderData.map(
                    (order) =>
                        <OrderRecordCard
                            order={order}
                            key={order.id}
                        />
                )
            }
            {/* 上一頁＆下一頁按鈕 */}
            <div className="mt-4 transition duration-300 ease-in-out lg:mb-0 mb-20">
                <button 
                    className="btn btn-primary px-8 py-6 sm:mr-16 mr-10"
                    disabled={pageNumber === 1 ? "disabled" : ""}
                    onClick={prev}
                >上一頁</button>
                <button 
                    className="btn btn-primary px-8 py-6"
                    disabled={pageNumber === totalPages ? "disabled" : ""}
                    onClick={next}
                >下一頁</button>
            </div>
        </div>
    )
}

export default OrderRecord