import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const Orders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if(user?.email) {
            console.log(user.email);
            fetch(`http://localhost:5000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
        }
    }, [user.email]);

    return (
        <div>
            <h2 className="my-5 text-center">Your Orders</h2>
                {
                    orders.map(order => {
                        return <Order key={order?._id} order={order} orders={orders} setOrders={setOrders} />
                    })
                }
        </div>
    )
}

export default Orders;