import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

  const {url,token} = useContext(StoreContext)   
  const [data,setData] = useState([]);

  const fetchOrders = async () => {
    try {
        const token = localStorage.getItem("token"); // Ensure token is fetched from localStorage or state
        if (!token) {
            throw new Error("No token found. User is not authenticated.");
        }

        const response = await axios.post(url + "/api/order/userorders", {}, {
            headers: {
                Authorization: `Bearer ${token}` // Send token as Bearer token in Authorization header
            }
        });

        if (response.data.success) {
            setData(response.data.data);
        } else {
            console.error("Failed to fetch orders:", response.data.message);
            // Optionally handle the error, e.g., show a message to the user
        }
    } catch (error) {
        console.error("Error fetching orders:", error.message);
        // Optionally handle the error, e.g., show a message to the user
    }
};


useEffect(()=>{
    if(token){
        fetchOrders();
    }
},[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index===order.items.length-1) {
                                return item.name+ " x " + item.quantity
                            } else {
                                return item.name+" x "+item.quantity+", "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrders