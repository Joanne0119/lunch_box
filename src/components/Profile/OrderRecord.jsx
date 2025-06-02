import React, { useState, useEffect } from 'react'
import OrderRecordCard from './OrderRecordCard'
import { useSelector} from 'react-redux';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebase';


const OrderRecord = () => {
    const user = useSelector((state) => state.user.user) || null;
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
    try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const data = userDoc.data();
        setOrders(data.orderlist || []);
    } catch (error) {
        console.error("抓訂單資料失敗：", error);
    }
    };

    useEffect(() => {
    fetchOrders();
    }, []);

    if (!user) {
        return <div className="p-6">請先登入以查看訂單記錄。</div>;
    }
    if (!user.orderlist || user.orderlist.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-9rem)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-24 h-24 mb-4 fill-current'>
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 388.7c-2.6 8.4-11.6 13.2-20 10.5s-13.2-11.6-10.5-20C145.2 326.1 196.3 288 256 288s110.8 38.1 127.3 91.3c2.6 8.4-2.1 17.4-10.5 20s-17.4-2.1-20-10.5C340.5 349.4 302.1 320 256 320s-84.5 29.4-96.7 68.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
                <div className="p-6 text-center font-bold text-2xl">目前沒有訂單記錄。</div>
                <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/make'}>
                    前往製作便當！
                </button>
            </div>
        );
    }
    return (
        <div className="overflow-y-auto h-[calc(100vh-9rem)] px-6">
            {/* <button 
                className='btn btn-secondary mb-4 ml-6' 
                onClick={fetchOrders}>
                刷新訂單資料
            </button> */}
            {/* 訂單List */}
            {orders.map((order) => (
                <OrderRecordCard
                order={order}
                key={order.createdAt}
                />
            ))}
            <p className="opacity-70 my-8">已滑至最新的便當紀錄</p>
        </div>
       
    )
}

export default OrderRecord