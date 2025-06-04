// src/api/orders.js
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const fetchOrders = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));
  const data = userDoc.data();
  return data.orderlist || [];
};
